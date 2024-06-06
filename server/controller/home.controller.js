
import { all_products } from "../service/home.service.js";

export const all_available_products=async(req,res)=>{
    try{
        const products=await all_products();
        res.status(200).send({products})
        

    }catch(e){
        res.status(400).send({"error":e})


    }
        
}