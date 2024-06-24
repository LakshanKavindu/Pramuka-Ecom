import express from "express";
const orderRouter = express.Router();
import { addOrder, userOrder } from "../controller/order.controller.js";

orderRouter.post("/", addOrder);
orderRouter.get("/", userOrder);

export default orderRouter;
