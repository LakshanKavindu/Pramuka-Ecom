"use client";

import { Table } from "flowbite-react";
import { SideMenu } from "../../components/Admin/SideMenu";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import axiosClient from "../../utils/axiosClient";
import { useEffect, useState } from "react";

const AdminProductDetails = () => {
  const [products, setProducts] = useState([]);
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
                      <FaEdit className="text-center w-5 h-5 flex justify-center items-center cursor-pointer text-blue-500" />
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
    </div>
  );
};

export default AdminProductDetails;
