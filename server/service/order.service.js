import { PrismaClient, shippingMethod } from "@prisma/client";
const prisma = new PrismaClient();

const createOrder = async (order) => {
  return await prisma.order.createMany({
    data: order,
  });
};

const groupByOrderId = async (products) => {
  const groupedOrders = products.reduce((acc, product) => {
    if (!acc[product.orderId]) {
      acc[product.orderId] = {
        orderId: product.orderId,
        orderStatus: product.status,
        shippingMethod: product.shippingMethod,
        deliverAddress:
          product.shippingMethod === "DELIVERY_DEFAULT"
            ? product.user.defaultAddress
            : product.user.billingAddress,
        orderDate: product.createdAt,
        totalPrice: 0,
        orderProducts: [],
      };
    }

    acc[product.orderId].orderProducts.push({
      product,
    });
    return acc;
  }, {});

  return Object.values(groupedOrders);
};

const getUserOrders = async (userId) => {
  const product = await prisma.order.findMany({
    where: {
      userId: userId,
    },
    include: {
      product: {
        select: {
          productName: true,
          productImage: true,
          productPrice: true,
        },
      },
      user: {
        select: {
          billingAddress: true,
          defaultAddress: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return await groupByOrderId(product);
};

export { createOrder, getUserOrders };
