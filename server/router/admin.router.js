
import express from "express";
import { addProduct } from "../controller/admin.controller.js";
const AdminRouter = express.Router();


AdminRouter.post('/addproduct', addProduct)

export default AdminRouter;