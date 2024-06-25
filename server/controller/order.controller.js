import { createOrder, getUserOrders, getAllOrders } from "../service/order.service.js";
import { removeUserCart } from "../service/product.service.js";
import { updateBillingAddress } from "../service/user.service.js";

const addOrder = async (req, res) => {
  const { orderProducts, address, shippingMethod } = req.body;
  const userId = req.userId;
  const orderId = Date.now() + "-" + Math.floor(Math.random() * 1000);
  const order = orderProducts.map((product) => ({
    userId: userId,
    orderId: orderId,
    productId: product.productId,
    quantity: product.quantity,
    shippingMethod: shippingMethod,
  }));

  if (shippingMethod === "DELIVERY_BILLING") {
    await updateBillingAddress(userId, address);
  }
  await createOrder(order)
    .then(async () => {
      await removeUserCart(userId)
        .then(() => {
          res.status(200).json({ message: "successfull placed order" });
        })
        .catch(() => {
          res.status(500).json({ message: "Internal server error" });
        });
    })
    .catch(() => {
      res.status(500).json({ message: "Internal server error" });
    });
};

const userOrder = async (req, res) => {
  const userId = req.userId;
  await getUserOrders(userId)
    .then((response) => {
      response.map((order) => {
        let totalPrice = 0;
        order.orderProducts.map((product) => {
          product.product.product.productPrice =
            product.product.product.productPrice * product.product.quantity;
          totalPrice += product.product.product.productPrice;
        });
        order.totalPrice = totalPrice;
      });
      res.status(200).json(response);
    })
    .catch(() => {
      res.status(500).json({ message: "Internal server error" });
    });
};

const adminOrder = async (req, res) => {
  await getAllOrders()
    .then((response) => {
      response.map((order) => {
        let totalPrice = 0;
        order.orderProducts.map((product) => {
          product.product.product.productPrice =
            product.product.product.productPrice * product.product.quantity;
          totalPrice += product.product.product.productPrice;
        });
        order.totalPrice = totalPrice;
      });
      res.status(200).json(response);
    })
    .catch(() => {
      res.status(500).json({ message: "Internal server error" });
    });
};

export { addOrder, userOrder, adminOrder };
