
import { all_products } from "../service/home.service.js";
import { deleteProduct, getAllOrders, updateOrderStatus  } from "../service/admin.service.js";
import { createProduct, getTotalRevenue, sellingForCategory, updateProduct } from "../service/admin.service.js";


export const addProduct = async (req, res) => {
  const values = req.body;
  const { name, description, brand, category, image, stock, price, oldPrice } = values;
  console.log(values, "product");
  console.log("name", name)
  try {
    await createProduct({
      name,
      description,
      brand,
      category,
      image,
      stock,
      price,
      oldPrice
    });
    res.status(201).send({ message: "Product added successfully" });
  } catch (e) {
    console.log(e);
    res.status(500).send({ error: e });
  }
};


export const getAllProducts = async (req, res) => {
  try {
    const products = await all_products();

    res.status(200).send({ products });
  } catch (e) {
    console.log(e)
    res.status(500).send({ error: e });
  }
}

export const deleteOneProduct = async (req, res) => {
  const id = req.params.id;
  try {
    await deleteProduct(id);
    res.status(200).send({ message: "Product deleted successfully" });
  }
  catch (e) {
    console.log(e)
    res.status(500).send({ error: e });
  }
}

export const updateOneProduct = async (req, res) => {


  const values = req.body;

  const { productName, productDescription, productBrand, productCategory, productStock, productPrice, productImage, productId, productPrevPrice } = values;

  console.log("productPrevPrice", productPrevPrice)
  try {
    await updateProduct({
      productName,
      productDescription,
      productBrand,
      productCategory,
      productStock,
      productPrice,
      productImage,
      productId,
      productPrevPrice,
    });
    res.status(201).send({ message: "Product updated successfully" });
  } catch (e) {
    console.log(e);
    res.status(500).send({ error: e });
  }
}

export const get_Total_Revenue = async (req, res) => {
  try {
    const TotalRev = await getTotalRevenue();
    res.status(200).send({ TotalRev })
  } catch (e) {
    res.status(500).send({ error: e });
  }
}
export const get_sellings_of_Category = async (req, res) => {
  try {
    const sellings = await sellingForCategory();
    res.status(200).send({ sellings })

  } catch (e) {
    res.status(500).send({ error: e });

  }
}

export const get_all_orders = async (req, res) => {
  try {
    const orders = await getAllOrders();
    res.status(200).send({ orders });
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
};

export const update_order_status = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const updatedOrder = await updateOrderStatus(id, status);
    if (updatedOrder) {
      res.status(200).send({ message: 'Order status updated successfully', order: updatedOrder });
    } else {
      res.status(404).send({ error: 'Order not found' });
    }
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
};


