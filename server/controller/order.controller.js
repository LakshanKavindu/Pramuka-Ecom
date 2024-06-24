import { createOrder, getUserOrders } from "../service/order.service.js";
import { removeUserCart } from "../service/product.service.js";

const addOrder = async (req, res) => {
  const { orderProducts } = req.body;
  const userId = req.userId;
  const orderId = Date.now() + "-" + Math.floor(Math.random() * 1000);
  const order = orderProducts.map((product) => ({
    userId: userId,
    orderId: orderId,
    productId: product.productId,
    quantity: product.quantity,
  }));

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
      res.status(200).json(response);
    })
    .catch(() => {
      res.status(500).json({ message: "Internal server error" });
    });
};

export { addOrder, userOrder };
