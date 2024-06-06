
import { all_products 
    ,get_products_by_Search
} from "../service/home.service.js";

export const all_available_products=async(req,res)=>{
    try{
        const products=await all_products();
        res.status(200).send({products})
        

    }catch(e){
        res.status(400).send({"error":e})


    }
        
}

export const get_products_for_searchValue=async(req,res)=>{
    const searchVal= req.params.Searchval;
    
    try{
        const searchedProducts=await get_products_by_Search(searchVal);
       
        res.status(200).send({searchedProducts})

    }
    catch(e){
        res.status(400).send({"error":e})

    }



}