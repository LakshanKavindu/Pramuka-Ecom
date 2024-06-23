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
  oldPrice,
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
      productPrevPrice: parseInt(oldPrice) || 0,
      productSold: 0,
      productVisibility: true,
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

export const getTotalRevenue = async () => {

  const result = await prisma.$queryRaw`
  SELECT SUM(productSold * productPrice) as totalRevenue
  FROM Product
`;

  return result[0].totalRevenue
};

export const sellingForCategory = async () => {
  const category = await prisma.product.groupBy({
    by: ['productCategory'],
    _sum: {
      productSold: true,
    },
    orderBy: {
      _sum: {
        productSold: 'desc', // or 'asc' for ascending order
      },
    },
  })
  return category;

}


export const updateProduct = async ({
  productName,
  productDescription,
  productBrand,
  productCategory,
  productStock,
  productPrice,
  productImage,
  productId,
  productPrevPrice,
}) => {
  return await prisma.product.update({
    where: {
      id: productId,
    },
    data: {
      productName: productName,
      productDescription: productDescription,
      productBrand: productBrand,
      productCategory: productCategory,
      productStock: parseInt(productStock),
      productPrice: parseInt(productPrice),
      productImage: productImage,
      productPrevPrice: parseInt(productPrevPrice) || 0,
    },
  });
}
export const getAllOrders = async () => {
  return await prisma.order.findMany({
    include: {
      user: true,
      product: true,
    },
  });
};

export const updateOrderStatus = async (id, status) => {
  try {
    const order = await prisma.order.update({
      where: { id },
      data: { status },
    });
    return order;
  } catch (error) {
    throw new Error('Error updating order status: ' + error.message);
  }
};