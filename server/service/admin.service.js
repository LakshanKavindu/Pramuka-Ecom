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
      productPrice: parseInt(price),
      productStock: parseInt(stock),
      productSold: 0,
    },
  });
};

export const deleteProduct = async (id) => {
  return await prisma.product.delete({
    where: {
      id: id,
    },
  });
}
