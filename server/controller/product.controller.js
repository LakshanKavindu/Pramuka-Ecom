import { addtoCart,get_user_cart,product_exists_on_cart, removefromcart, updatecart
} from "../service/product.service.js";

export const add_to_cart=async(req,res)=>{
    const productID=req.body.productid;
    const userID=req.body.userid;
    const quantity=req.body.quantity;
    console.log(productID,userID,quantity)
    
    
  
    try{
        const ex=await product_exists_on_cart(userID,productID)
        if(ex){
            
            console.log(ex.quantity)
            
            const up=await updatecart(userID,productID,ex.quantity+quantity)
            res.status(200).send({up})
        }else{
            const products=await addtoCart(userID,productID,quantity)
            res.status(200).send({products})

        } 

     
        

    }catch(e){
        console.log("error",e)
        res.status(400).send({"error":e})


    }
}


export const get_cart=async(req,res)=>{
    
    const id=req.params.userid
    console.log(id)
    
    try{
        const pro=await get_user_cart(id)
        res.status(200).send(pro.cart)

    }
    catch(e){
        res.status(400).send({e})

    }
}

export const update_cart=async(req,res)=>{
    const productID=req.body.productid;
    const userID=req.body.userid;
    const quantity=req.body.quantity;
    console.log(productID,userID,quantity)

    try{
           
        const up=await updatecart(userID,productID,quantity)
        res.status(200).send({up})



    }catch(e){
        res.status(400).send({e})


    }



}
export const remove_from_cart=async(req,res)=>{
    const productID=req.params.productid;
    const userID=req.params.userid;
    console.log('remove called',productID,userID)


     try{
           
        const del=await removefromcart(productID,userID)
        res.status(200).send({del})



    }catch(e){
        res.status(400).send({e})


    }



}