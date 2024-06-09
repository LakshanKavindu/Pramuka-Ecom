import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createProduct = async ({
  name,
  description,
  brand,
  category,
  image,
  stock,
  price,
}) => {
  return await prisma.product.create({
    data: {
      productName: name,
      productDescription: description,
      productBrand: brand,
      productCategory: category,
      productImage: image,
      productPrice: price,
      productStock: stock,
      productSold: 0,
    },
  });
};
