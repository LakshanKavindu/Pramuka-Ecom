
import express from "express";


import { getAllProducts } from "../controller/admin.controller.js";
import { deleteOneProduct, get_all_orders, update_order_status } from "../controller/admin.controller.js";

import { addProduct, get_Total_Revenue, get_sellings_of_Category, updateOneProduct } from "../controller/admin.controller.js";

const AdminRouter = express.Router();


AdminRouter.post('/addproduct', addProduct)

AdminRouter.get('/allproducts', getAllProducts)
AdminRouter.delete('/deleteproduct/:id', deleteOneProduct)
AdminRouter.post('/updateproduct/:id', updateOneProduct)

AdminRouter.get('/totalrevenue', get_Total_Revenue)
AdminRouter.get('/sellings', get_sellings_of_Category)

AdminRouter.get('/orders', get_all_orders);
AdminRouter.put('/updateorder/:id', update_order_status);

export default AdminRouter;