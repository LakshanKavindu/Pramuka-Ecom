import express from "express";

const userRouter = express.Router();

userRouter.post("/login");

module.exports = userRouter;
