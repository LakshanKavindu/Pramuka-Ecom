
import {
    all_products
    , get_product_names, get_products_by_Search,
    get_products_by_filter, get_product_by_id
} from "../service/home.service.js";

export const all_available_products = async (req, res) => {
    try {
        const products = await all_products();
        res.status(200).send({ products })


    } catch (e) {
        res.status(400).send({ "error": e })


    }

}

export const get_products_for_searchValue = async (req, res) => {
    const searchVal = req.params.Searchval;
    const trimmedSearchVal = searchVal.trim();
    console.log(searchVal)

    try {
        if (!searchVal || !searchVal.trim()) {
            const searchedProducts = await all_products();

            res.status(200).send({ searchedProducts })


        } else {
            const searchedProducts = await get_products_by_Search(trimmedSearchVal);

            res.status(200).send({ searchedProducts })

        }




    }
    catch (e) {
        res.status(400).send({ "error": e })

    }



}

export const get_products_for_filterhValue = async (req, res) => {
    const filterval = req.params.filterval;
    console.log(filterval)
    try {
        console.log(filterval)
        const filteredProducts = await get_products_by_filter(filterval)
        res.status(200).send({ filteredProducts })
        console.log(filteredProducts)
    } catch (e) {
        res.status(400).send({ "error": e })

    }

}
export const get_all_product_names = async (req, res) => {

    try {
        const send = []
        const productnames = await get_product_names()

        productnames.map((i) => {
            send.push(i.productName)
        })
        res.status(200).send({ send })





    } catch (e) {
        res.status(400).send({ "error": e })

    }

}

export const getOneProduct = async (req, res) => {
    const id = req.params.productid;
    console.log("id", id)
    try {
        const product = await get_product_by_id(id);
        res.status(200).send({ product });
    } catch (e) {
        res.status(400).send({ error: e });
    }
};

