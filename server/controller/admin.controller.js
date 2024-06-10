import { createProduct, getTotalRevenue, } from "../service/admin.service.js";

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

export const get_Total_Revenue=async(req,res)=>{
  const TotalRev=await getTotalRevenue();
  res.status(200).send({TotalRev})

}