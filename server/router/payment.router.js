
import express from "express";

import { hashing } from "../controller/payment.controller.js";

const PaymentRouter = express.Router();

PaymentRouter.post('/hash', hashing)

export default PaymentRouter;
