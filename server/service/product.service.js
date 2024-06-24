import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getidformail = async (email) => {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  return user.id;
};
export const addtoCart = async (userID, productID, quantity) => {
  const id = await getidformail(userID);
  const add = await prisma.cart.create({
    data: {
      userId: id,
      productId: productID,
      quantity: quantity,
    },
  });

  return add;
};

export const product_exists_on_cart = async (userid, productid) => {
  const id = await getidformail(userid);
  const exists = await prisma.cart.findFirst({
    where: {
      userId: id,
      productId: productid,
    },
  });

  return exists;
};

export const updatecart = async (userid, productid, quantity) => {
  const id = await getidformail(userid);
  const updateUser = await prisma.cart.updateMany({
    where: {
      userId: id,
      productId: productid,
    },
    data: {
      quantity: quantity,
    },
  });
  return updateUser;
};

export const get_user_cart = async (mail) => {
  const user = await prisma.user.findFirst({
    where: {
      email: mail,
    },
    include: {
      cart: {
        include: {
          product: true,
        },
      },
    },
  });

  // console.log(products)
  return user;
};

export const removefromcart = async (productid, userid) => {
  const deleteproduct = await prisma.cart.deleteMany({
    where: {
      productId: productid,
      user: {
        email: userid,
      },
    },
  });
  return deleteproduct;
};

export const removeUserCart = async (userId) => {
  return await prisma.cart.deleteMany({
    where: {
      userId: userId,
    },
  });
};
