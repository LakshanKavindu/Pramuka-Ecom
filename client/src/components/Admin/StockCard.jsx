"use client";
import axiosClient from "../../utils/axiosClient";
import { Card } from "flowbite-react";
import { Dropdown } from "flowbite-react";
import { useState, useEffect } from "react";
import { ProductStockCard } from "./ProductStockCard";

const StockCard = () => {
  const [filter, setFilter] = useState("Categories");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axiosClient
      .get("/auth/admin/allproductsinorder")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data.products);
      })
      .catch((error) => {
        console.log("error occured");
        console.log(error);
      });
  }, []);
  const filterhandle = (val) => {
    setFilter(val);
    axiosClient
      .get(`/auth/admin/filterproducts/${val}`)
      .then((res) => {
        setProducts(res.data.filteredProducts);
        console.log(products);
      })
      .catch((error) => {
        console.log("error occured");
        console.log(error);
      });
  };

  return (
    <Card className="max-w-xl w-full">
      <div>
        <h5 className="mb-3 text-base font-semibold text-gray-900 lg:text-xl dark:text-white">
          Product Stocks
        </h5>
      </div>
      <div>
        <Dropdown
          outline
          // gradientDuoTone="pinkToOrange"
          label={<span className="text-black">{filter}</span>}
          // dismissOnClick={false}
          className=" focus:ring-white bg-white"
          value={filter}
        >
          <Dropdown.Item
            value="All Products"
            onClick={() => {
              //   setIsSearching(false);
              setFilter("Categories");
            }}
          >
            All Products
          </Dropdown.Item>
          <Dropdown.Item
            value="Chocolate"
            onClick={() => {
              filterhandle("Chocolate");
            }}
          >
            Chocolate
          </Dropdown.Item>
          <Dropdown.Item
            value="Biscuits"
            onClick={() => {
              filterhandle("Biscuit");
            }}
          >
            Biscuits
          </Dropdown.Item>
          <Dropdown.Item
            value="Soap"
            onClick={() => {
              filterhandle("Soap");
            }}
          >
            Soap
          </Dropdown.Item>
          <Dropdown.Item
            value="Toothpaste"
            onClick={() => {
              filterhandle("Toothpaste");
            }}
          >
            Toothpaste
          </Dropdown.Item>
        </Dropdown>
      </div>
      <div className=" w-full flex flex-wrap gap-6 justify-between max-h-[380px] h-[380px] overflow-y-scroll ">
        {products.map((item) => {
          return (
            <ProductStockCard
              key={item.id}
              brand={item.productBrand}
              name={item.productName}
              stock={item.productStock}
              image={item.productImage}
            />
          );
        })}
      </div>
    </Card>
  );
};

export default StockCard;
