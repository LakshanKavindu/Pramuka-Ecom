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
    return products;


}