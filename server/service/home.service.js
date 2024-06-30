import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


export const all_products = async () => {
    const products = await prisma.product.findMany()
    return products;

}

export const get_products_by_Search = async (searchValue) => {

    const products = await prisma.product.findMany({
        where: {
            productName: { contains: searchValue }
        }
    })
    // console.log(products)
    return products;


}
export const get_products_by_filter = async (filterval) => {

    const products = await prisma.product.findMany({
        where: {
            productCategory: filterval
        }
    })
    // console.log(products)
    return products;


}


export const get_products_by_filter_Brand = async (filterval) => {

    const products = await prisma.product.findMany({
        where: {
            productBrand: filterval
        }
    })
    // console.log(products)
    return products;


}
export const get_product_names = async () => {

    const products = await prisma.product.findMany({
        select: {
            productName: true
        }
    })
    // console.log(products)
    return products;


}

export const get_product_by_id = async (id) => {

    const products = await prisma.product.findUnique({
        where: {
            id: id
        }
    })

    return products;
}

// export const get_brand_for_category=async()=>{
//     const brands = await prisma.product.groupBy({
//         by:['productCategory'],

//         select:{
//             productBrand:true
//         }
//       })
    

//       return brands
      

// }

export const get_brand_for_category = async () => {
    const brandsByCategory = await prisma.product.groupBy({
        by: ['productCategory'],
        _count: {
            productBrand: true
        }
    });

    const result = await Promise.all(brandsByCategory.map(async (category) => {
        const brands = await prisma.product.findMany({
            where: { productCategory: category.productCategory },
            select: { productBrand: true },
            distinct: ['productBrand']
        });

        return {
            category: category.productCategory,
            brands: brands.map(b => b.productBrand)
        };
    }));

    return result;
};


