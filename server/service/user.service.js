import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getUserByEmail = async (email) => {
  return await prisma.user.findUnique({
    where: {
      email: email,
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
    },
  });
};

const updateContactNo = async (email, contactNo) => {
  return await prisma.user.update({
    where: {
      email: email,
    },
    data: {
      phoneNo: contactNo,
    },
  });
};

export { getUserByEmail, createUser, updateContactNo };
