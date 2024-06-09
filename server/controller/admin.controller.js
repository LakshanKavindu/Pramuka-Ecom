// import { createProduct } from "../service/admin.service.js";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const addProduct = async (req, res) => {
    const values = req.body;
    const { name, description, brand, category, image, stock, price } = values;
    console.log(values, "product")
    try {
        await prisma.product.create({
            data: {
                productName: name,
                productDescription: description,
                productBrand: brand,
                productCategory: category,
                productImage: image,
                productStock: parseInt(stock),
                productPrice: parseInt(price)
            }
        })

        res.status(201).send({ message: "Product added successfully" });
    } catch (e) {
        res.status(500).send({ error: e });
    }

}