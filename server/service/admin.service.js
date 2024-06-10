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

export const getTotalRevenue = async () => {
 
  const result = await prisma.$queryRaw`
  SELECT SUM(productSold * productPrice) as totalRevenue
  FROM Product
`;
 
  return result[0].totalRevenue
};

export const sellingForCategory=async()=>{
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
  return  category;
  
}

