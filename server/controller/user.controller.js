import {
  getUserByEmail,
  createUser,
  updateContactNo,
  getUserById,
} from "../service/user.service.js";
import jwt from "jsonwebtoken";
import axios from "axios";

const maxAge = 5 * 60 * 60;
const createToken = (id, role) => {
  const secretCode = process.env.JWT_SECRET;
  return jwt.sign({ id, role }, secretCode, {
    expiresIn: maxAge,
  });
};

const userLogin = async (req, res) => {
  const { token } = req.body;
  await axios
    .get("https://www.googleapis.com/oauth2/v1/userinfo?alt=json", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(async (response) => {
      const { email, name, picture } = response.data;
      const user = await getUserByEmail(email);
      if (!user) {
        const newUser = await createUser(email, name, picture);
        const token = createToken(newUser.id, newUser.role);
        res.status(201).send({
          message: "success",
          userExist: false,
          role: newUser.role,
          token: token,
          user: newUser,
        });
        return;
      }
      const token = createToken(user.id, user.role);
      if (!user.phoneNo || !user.defaultAddress) {
        res.status(200).send({
          message: "success",
          userExist: false,
          role: user.role,
          token: token,
          user: user,
        });
        return;
      }

      res.status(200).send({
        message: "success",
        userExist: true,
        role: user.role,
        token: token,
        user: user,
      });
    })
    .catch((e) => {
      console.log(e, "error");
      res.status(500).send({ message: "Internal Server Error" });
    });
};

const updateContactNumber = async (req, res) => {
  const { contactNo, address } = req.body;
  const id = req.userId;
  try {
    const user = await getUserById(id);
    if (!user) {
      res.status(404).send({ message: "User not found" });
      return;
    }
    await updateContactNo(id, contactNo, address);

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
      defaultAddress: user.defaultAddress,
    });
  } catch (e) {
    console.log(e, "error");
    res.status(500).send({ message: "Internal Server Error" });
  }
};

export { userLogin, updateContactNumber, getUserProfile };
