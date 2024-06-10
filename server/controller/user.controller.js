import {
  getUserByEmail,
  createUser,
  updateContactNo,
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
  try {
    const user = await getUserByEmail(email);
    console.log(user, "user");
    const token = createToken(user.id, user.role);
    if (!user) {
      await createUser(email, userName, imageUrl);
      res.status(201).send({
        message: "success",
        userExist: false,
        role: user.role,
        token: token,
      });
      return;
    }
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
  const { email, contactNo } = req.body;
  try {
    const user = await getUserByEmail(email);
    if (!user) {
      res.status(404).send({ message: "User not found" });
      return;
    }
    await updateContactNo(email, contactNo);

    res.status(200).send({ message: "success" });
  } catch (e) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

export { userLogin, updateContactNumber };
