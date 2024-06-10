import {
  getUserByEmail,
  createUser,
  updateContactNo,
  getUserById,
} from "../service/user.service.js";
import jwt from "jsonwebtoken";

const maxAge = 5 * 60 * 60;
const createToken = (id, role) => {
  const secretCode = process.env.JWT_SECRET;
  return jwt.sign({ id, role }, secretCode, {
    expiresIn: maxAge,
  });
};

const userLogin = async (req, res) => {
  const { email, userName, imageUrl } = req.body;
  console.log(email, userName, imageUrl, "user");
  try {
    const user = await getUserByEmail(email);
    console.log(user, "user");

    if (!user) {
      const newUser = await createUser(email, userName, imageUrl);
      const token = createToken(newUser.id, newUser.role);
      res.status(201).send({
        message: "success",
        userExist: false,
        role: user.role,
        token: token,
      });
      return;
    }
    const token = createToken(user.id, user.role);
    if (!user.phoneNo) {
      res.status(200).send({
        message: "success",
        userExist: false,
        role: user.role,
        token: token,
      });
      return;
    }

    res.status(200).send({
      message: "success",
      userExist: true,
      role: user.role,
      token: token,
    });
  } catch (e) {
    console.log(e, "error");
    res.status(500).send({ message: "Internal Server Error" });
  }
};

const updateContactNumber = async (req, res) => {
  const { contactNo } = req.body;
  const id = req.userId;
  try {
    const user = await getUserById(id);
    if (!user) {
      res.status(404).send({ message: "User not found" });
      return;
    }
    await updateContactNo(id, contactNo);

    res.status(200).send({ message: "success" });
  } catch (e) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

const getUserProfile = async (req, res) => {
  const id = req.userId;
  try {
    const user = await getUserById(id);
    if (!user) {
      res.status(404).send({ message: "User not found" });
      return;
    }
    res.status(200).send({
      name: user.username,
      phoneNo: user.phoneNo,
    });
  } catch (e) {
    console.log(e, "error");
    res.status(500).send({ message: "Internal Server Error" });
  }
};

export { userLogin, updateContactNumber, getUserProfile };
