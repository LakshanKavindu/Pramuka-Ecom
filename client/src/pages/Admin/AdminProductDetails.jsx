"use client";

import { Table } from "flowbite-react";
import { SideMenu } from "../../components/Admin/SideMenu";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import axiosClient from "../../utils/axiosClient";
import { useEffect, useState } from "react";
import { EditModal } from "../../components/Admin/EditModal";
import { AlertBar } from "../../components/Common/AlertBar";

const AdminProductDetails = () => {
  const [products, setProducts] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [alertSuccess, setAlertSuccess] = useState(false);
  const [alertInvalid, setAlertInvalid] = useState(false);
  const [alertEmpty, setAlertEmpty] = useState(false);
  const [alertDeleted, setAlertDeleted] = useState(false);
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productBrand, setProductBrand] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productStock, setProductStock] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productPrevPrice, setproductPrevPrice] = useState("");

  console.log("productPrevPrice", productPrevPrice);

  useEffect(() => {
    axiosClient
      .get("/admin/allproducts")
      .then((res) => {
        console.log(res.data.products);
        setProducts(res.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = (id) => {
    console.log("delete");

    axiosClient
      .delete(`/admin/deleteproduct/${id}`)
      .then((res) => {
        console.log(res.data);
        const newProducts = products.filter((product) => product.id !== id);
        setProducts(newProducts);
        setAlertDeleted(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleEdit = (id) => {
    console.log("edit");
    setOpenModal(true);

    const product = products.find((product) => product.id === id);
    setProductId(product.id);
    setProductName(product.productName);
    setProductDescription(product.productDescription);
    setProductBrand(product.productBrand);
    setProductCategory(product.productCategory);
    setProductStock(product.productStock);
    setProductPrice(product.productPrice);
    setProductImage(product.productImage);
    setproductPrevPrice(product.productPrevPrice);

    console.log(product);
  };

  const handleSave = (pId) => {
    if (
      productName === "" ||
      // productDescription === "" ||
      productBrand === "" ||
      productCategory === "" ||
      productStock === "" ||
      productPrice === ""
    ) {
      setAlertEmpty(true);
      setTimeout(() => {
        setAlertEmpty(false);
      }, 2000);
      return;
    }

    if (isNaN(productStock) || isNaN(productPrice)) {
      setAlertEmpty(true);
      setTimeout(() => {
        setAlertEmpty(false);
      }, 2000);
      return;
    }

    if (productStock < 0 || productPrice < 0) {
      setAlertInvalid(true);
      setTimeout(() => {
        setAlertInvalid(false);
      }, 2000);
      return;
    }

    axiosClient
      .post(`/admin/updateproduct/${pId}`, {
        productId: pId,
        productName: productName,
        productDescription: productDescription,
        productBrand: productBrand,
        productCategory: productCategory,
        productStock: productStock,
        productPrice: productPrice,
        productImage: productImage,
        productPrevPrice: productPrevPrice,
      })
      .then((res) => {
        const newProducts = products.map((product) => {
          if (product.id === pId) {
            return {
              ...product,
              productName: productName,
              productDescription: productDescription,
              productBrand: productBrand,
              productCategory: productCategory,
              productStock: productStock,
              productPrice: productPrice,
              productImage: productImage,
              productPrevPrice: productPrevPrice,
            };
          }
          return product;
        });

        setProducts(newProducts);
        setAlertSuccess(true);
      })
      .catch((error) => {
        console.log(error);
      });
    setOpenModal(false);
  };

  return (
    <div className=" w-full flex flex-row overflow-hidden relative">
      <SideMenu />

      <div className=" p-6 w-full h-screen">
        <div className=" mb-3 h-12">
          <p className=" font-bold text-2xl">Product Details</p>
        </div>
        <div className="flex flex-col justify-start w-full h-full items-center overflow-hidden pt-8 pb-16">
          <div className="overflow-x-auto">
            <Table>
              <Table.Head>
                <Table.HeadCell>Product name</Table.HeadCell>
                <Table.HeadCell>Description</Table.HeadCell>
                <Table.HeadCell>Brand</Table.HeadCell>
                <Table.HeadCell>Category</Table.HeadCell>
                <Table.HeadCell>Stock</Table.HeadCell>
                <Table.HeadCell>Price</Table.HeadCell>
                <Table.HeadCell>Old Price</Table.HeadCell>

                <Table.HeadCell>
                  <span className="sr-only">Edit</span>
                </Table.HeadCell>
                <Table.HeadCell>
                  <span className="sr-only">Delete</span>
                </Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {products.map((product, index) => (
                  <Table.Row
                    key={index}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {product.productName}
                    </Table.Cell>
                    <Table.Cell>{product.productDescription}</Table.Cell>
                    <Table.Cell>{product.productBrand}</Table.Cell>
                    <Table.Cell>{product.productCategory}</Table.Cell>
                    <Table.Cell>{product.productStock}</Table.Cell>
                    <Table.Cell>{product.productPrice}</Table.Cell>
                    <Table.Cell>{product.productPrevPrice}</Table.Cell>
                    <Table.Cell>
                      <FaEdit
                        onClick={() => {
                          handleEdit(product.id);
                        }}
                        className="text-center w-5 h-5 flex justify-center items-center cursor-pointer text-blue-500"
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <MdDeleteForever
                        onClick={() => {
                          handleDelete(product.id);
                        }}
                        className="text-center w-6 h-6 flex justify-center items-center cursor-pointer text-red-700"
                      />
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
        </div>
      </div>
      <EditModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        productId={productId}
        productName={productName}
        productDescription={productDescription}
        productBrand={productBrand}
        productCategory={productCategory}
        productStock={productStock}
        productPrice={productPrice}
        productImage={productImage}
        productPrevPrice={productPrevPrice}
        setProductName={setProductName}
        setProductDescription={setProductDescription}
        setProductBrand={setProductBrand}
        setProductCategory={setProductCategory}
        setProductStock={setProductStock}
        setProductPrice={setProductPrice}
        setProductImage={setProductImage}
        setproductPrevPrice={setproductPrevPrice}
        handleSave={handleSave}
        alertSuccess={alertSuccess}
        alertInvalid={alertInvalid}
        alertEmpty={alertEmpty}
      />
      <div className=" absolute bottom-4 left-4 z-50">
        {alertSuccess && (
          <AlertBar message="Product Updated successfully" type="success" />
        )}
        {alertEmpty && (
          <AlertBar message="Please fill all fields" type="error" />
        )}
        {alertInvalid && (
          <AlertBar message="Please enter valid input" type="error" />
        )}
        {alertDeleted && (
          <AlertBar message="Product deleted successfully" type="success" />
        )}
      </div>
    </div>
  );
};

export default AdminProductDetails;
