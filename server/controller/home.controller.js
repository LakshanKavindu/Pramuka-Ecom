
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
    const trimmedSearchVal = searchVal.trim();
    console.log(searchVal)
    
    try{
        if(!searchVal || !searchVal.trim()){
            const searchedProducts=await all_products();
            
            res.status(200).send({searchedProducts})


        }else{
            const searchedProducts=await get_products_by_Search(trimmedSearchVal);
            
            res.status(200).send({searchedProducts})

        }
       
       
        

    }
    catch(e){
        res.status(400).send({"error":e})

    }



}