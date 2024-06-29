import express from "express";
import { add_to_cart, get_cart, remove_from_cart, update_cart } from "../controller/product.controller.js";
const ProductRouter = express.Router();


ProductRouter.post('/addtocart', add_to_cart)
ProductRouter.get('/getcart/:userid', get_cart)
ProductRouter.put('/updatecart', update_cart)
ProductRouter.delete('/deletefromcart/:productid/:userid', remove_from_cart)



export default ProductRouter;