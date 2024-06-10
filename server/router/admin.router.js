
import express from "express";
import { addProduct, get_Total_Revenue } from "../controller/admin.controller.js";
const AdminRouter = express.Router();


AdminRouter.post('/addproduct', addProduct)
AdminRouter.get('/totalrevenue', get_Total_Revenue)

export default AdminRouter;