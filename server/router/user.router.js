import express from "express";
const userRouter = express.Router();
import {
  userLogin,
  updateContactNumber,
} from "../controller/user.controller.js";
userRouter.post("/login", userLogin);
userRouter.post("/updateContactNumber", updateContactNumber);

export default userRouter;
