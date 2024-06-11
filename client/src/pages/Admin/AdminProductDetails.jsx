"use client";

import { Table } from "flowbite-react";
import { SideMenu } from "../../components/Admin/SideMenu";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import axiosClient from "../../utils/axiosClient";
import { useEffect, useState } from "react";
import { EditModal } from "../../components/Admin/EditModal";

const AdminProductDetails = () => {
  const [products, setProducts] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [alertSuccess, setAlertSuccess] = useState(false);
  const [alertInvalid, setAlertInvalid] = useState(false);
  const [alertEmpty, setAlertEmpty] = useState(false);
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productBrand, setProductBrand] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productStock, setProductStock] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState("");

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
      })
      .catch((error) => {
        console.log(error);
      });

    const newProducts = products.filter((product) => product.id !== id);
    setProducts(newProducts);
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

    console.log(product);
  };

  const handleSave = (pId) => {
    console.log("save");
    setOpenModal(false);

    //update the existing products array with the new product details

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
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

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
        };
      }
      return product;
    });
    setProducts(newProducts);
  };

  return (
    <div className=" w-full flex flex-row overflow-hidden">
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
        setProductName={setProductName}
        setProductDescription={setProductDescription}
        setProductBrand={setProductBrand}
        setProductCategory={setProductCategory}
        setProductStock={setProductStock}
        setProductPrice={setProductPrice}
        setProductImage={setProductImage}
        handleSave={handleSave}
        alertSuccess={alertSuccess}
        alertInvalid={alertInvalid}
        alertEmpty={alertEmpty}
      />
    </div>
  );
};

export default AdminProductDetails;
