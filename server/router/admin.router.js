
import express from "express";
import { addProduct, get_Total_Revenue, get_sellings_of_Category } from "../controller/admin.controller.js";
const AdminRouter = express.Router();


AdminRouter.post('/addproduct', addProduct)
AdminRouter.get('/totalrevenue', get_Total_Revenue)
AdminRouter.get('/sellings', get_sellings_of_Category)

export default AdminRouter;