import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


export const all_products=async()=>{
    const products = await prisma.product.findMany()
    return products;

}

export const get_products_by_Search=async(searchValue)=>{
   
    const products =await prisma.product.findMany({
        where:{
            productName:{contains:searchValue}
        }
    })
    // console.log(products)
    return products;


}
export const get_products_by_filter=async(filterval)=>{
   
    const products =await prisma.product.findMany({
        where:{
            productCategory:filterval
        }
    })
    // console.log(products)
    return products;


}
export const get_product_names=async()=>{
   
    const products =await prisma.product.findMany({
        select:{
            productName:true
        }
    })
    // console.log(products)
    return products;


}

