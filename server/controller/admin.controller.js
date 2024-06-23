
import { deleteProduct } from "../service/admin.service.js";
import { all_products, createProduct, getTotalRevenue, sellingForCategory, updateProduct, get_products_by_filter } from "../service/admin.service.js";


export const addProduct = async (req, res) => {
  const values = req.body;
  const { name, description, brand, category, image, stock, price, oldPrice } = values;
  console.log(values, "product");
  console.log("name", name)
  try {
    await createProduct({
      name,
      description,
      brand,
      category,
      image,
      stock,
      price,
      oldPrice
    });
    res.status(201).send({ message: "Product added successfully" });
  } catch (e) {
    console.log(e);
    res.status(500).send({ error: e });
  }
};


export const getAllProducts = async (req, res) => {
  try {
    const products = await all_products();

    res.status(200).send({ products });
  } catch (e) {
    console.log(e)
    res.status(500).send({ error: e });
  }
}

export const deleteOneProduct = async (req, res) => {
  const id = req.params.id;
  try {
    await deleteProduct(id);
    res.status(200).send({ message: "Product deleted successfully" });
  }
  catch (e) {
    console.log(e)
    res.status(500).send({ error: e });
  }
}

export const updateOneProduct = async (req, res) => {


  const values = req.body;

  const { productName, productDescription, productBrand, productCategory, productStock, productPrice, productImage, productId, productPrevPrice } = values;

  console.log("productPrevPrice", productPrevPrice)
  try {
    await updateProduct({
      productName,
      productDescription,
      productBrand,
      productCategory,
      productStock,
      productPrice,
      productImage,
      productId,
      productPrevPrice,
    });
    res.status(201).send({ message: "Product updated successfully" });
  } catch (e) {
    console.log(e);
    res.status(500).send({ error: e });
  }
}




export const get_Total_Revenue = async (req, res) => {
  try {
    const TotalRev = await getTotalRevenue();
    res.status(200).send({ TotalRev })
  } catch (e) {
    res.status(500).send({ error: e });
  }
}
export const get_sellings_of_Category = async (req, res) => {
  try {
    const sellings = await sellingForCategory();
    res.status(200).send({ sellings })

  } catch (e) {
    res.status(500).send({ error: e });

  }
}

export const get_all_products_inorder = async (req, res) => {
  try {
    const products = await all_products();
    console.log("products", products)



    res.status(200).send({ products })
  } catch (e) {
    res.status(500).send({ error: e });
  }
}


export const get_filter_products_inorder = async (req, res) => {
  const filterval = req.params.filterval;
  console.log(filterval)
  try {
    console.log(filterval)
    const filteredProducts = await get_products_by_filter(filterval)
    res.status(200).send({ filteredProducts })
    console.log("filterd", filteredProducts)
  } catch (e) {
    res.status(400).send({ "error": e })

  }

}