import { createProduct } from "../service/admin.service.js";

export const addProduct = async (req, res) => {
  const values = req.body;
  const { name, description, brand, category, image, stock, price } = values;
  console.log(values, "product");
  try {
    await createProduct({
      name: "abc",
      description: "def",
      brand: "ghi",
      category: "jkl",
      image: "mno",
      stock: 2,
      price: 123,
    });
    res.status(201).send({ message: "Product added successfully" });
  } catch (e) {
    console.log(e);
    res.status(500).send({ error: e });
  }
};
