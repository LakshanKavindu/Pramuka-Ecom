import express from "express";
import { all_available_products, get_products_for_filterhValue, get_products_for_searchValue } from "../controller/home.controller.js";
const HomeRouter = express.Router();


HomeRouter.get('/allproducts',all_available_products)
HomeRouter.get('/search/:Searchval',get_products_for_searchValue)
HomeRouter.get('/filter/:filterval',get_products_for_filterhValue)

export default HomeRouter;