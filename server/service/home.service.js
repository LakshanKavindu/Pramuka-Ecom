import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


export const all_products=async()=>{
    const products = await prisma.product.findMany()
    return products;

}