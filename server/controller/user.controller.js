import {
  getUserByEmail,
  createUser,
  updateContactNo,
} from "../service/user.service.js";

const userLogin = async (req, res) => {
  const { email, userName, imageUrl } = req.body;
  try {
    const user = await getUserByEmail(email);
    console.log(user, "user");
    if (!user) {
      await createUser(email, userName, imageUrl);
      res.status(201).send({ message: "success", userExist: false });
      return;
    }
    if (!user.phoneNo) {
      res.status(200).send({ message: "success", userExist: false });
      return;
    }

    res.status(200).send({ message: "success", userExist: true });
  } catch (e) {
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
