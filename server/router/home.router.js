import express from "express";
import { all_available_products } from "../controller/home.controller.js";
const HomeRouter = express.Router();


HomeRouter.get('/allproducts',all_available_products)

export default HomeRouter;