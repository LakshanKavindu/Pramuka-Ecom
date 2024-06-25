import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getUserByEmail = async (email) => {
  return await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
};

const getUserById = async (id) => {
  return await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
};

const createUser = async (email, userName, imageUrl) => {
  console.log(email, userName, imageUrl, "aaaaaaaa22222");
  return await prisma.user.create({
    data: {
      email: email,
      username: userName,
      image: imageUrl,
      role: "USER",
    },
  });
};

const updateContactNo = async (id, contactNo, address) => {
  return await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      phoneNo: contactNo,
      defaultAddress: address,
    },
  });
};

const updateBillingAddress = async (id, address) => {
  return await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      billingAddress: address,
    },
  });
};

export {
  getUserByEmail,
  getUserById,
  createUser,
  updateContactNo,
  updateBillingAddress,
};
