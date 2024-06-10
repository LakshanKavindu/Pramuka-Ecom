import { createProduct } from "../service/admin.service.js";
import { all_products } from "../service/home.service.js";
import { deleteProduct } from "../service/admin.service.js";

export const addProduct = async (req, res) => {
  const values = req.body;
  const { name, description, brand, category, image, stock, price } = values;
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
