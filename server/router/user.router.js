import express from "express";
const userRouter = express.Router();
import {
  userLogin,
  updateContactNumber,
  getUserProfile,
} from "../controller/user.controller.js";
userRouter.post("/user/login", userLogin);
userRouter.post("/auth/user/updateContactNumber", updateContactNumber);
userRouter.get("/auth/user/profile", getUserProfile);

export default userRouter;
