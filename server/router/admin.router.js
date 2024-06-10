
import express from "express";
import { addProduct } from "../controller/admin.controller.js";
import { getAllProducts } from "../controller/admin.controller.js";
import { deleteOneProduct } from "../controller/admin.controller.js";
const AdminRouter = express.Router();


AdminRouter.post('/addproduct', addProduct)
AdminRouter.get('/allproducts', getAllProducts)
AdminRouter.delete('/deleteproduct/:id', deleteOneProduct)

export default AdminRouter;