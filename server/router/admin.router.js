
import express from "express";


import { getAllProducts } from "../controller/admin.controller.js";
import { deleteOneProduct, get_all_orders, update_order_status } from "../controller/admin.controller.js";

import { addProduct, get_Total_Revenue, get_sellings_of_Category, updateOneProduct, get_all_products_inorder, get_filter_products_inorder } from "../controller/admin.controller.js";
import { adminOrder } from "../controller/order.controller.js";

const AdminRouter = express.Router();


AdminRouter.post('/addproduct', addProduct)

AdminRouter.get('/allproducts', getAllProducts)
AdminRouter.delete('/deleteproduct/:id', deleteOneProduct)
AdminRouter.post('/updateproduct/:id', updateOneProduct)

AdminRouter.get('/totalrevenue', get_Total_Revenue)
AdminRouter.get('/sellings', get_sellings_of_Category)
AdminRouter.get('/allproductsinorder', get_all_products_inorder)
AdminRouter.get('/filterproducts/:filterval', get_filter_products_inorder)

AdminRouter.get('/orders', get_all_orders);
AdminRouter.put('/updateorder/:id', update_order_status);
AdminRouter.get('/adminorders', adminOrder);

export default AdminRouter;