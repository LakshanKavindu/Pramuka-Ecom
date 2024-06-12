"use client";
import axiosClient from "../../utils/axiosClient";
import { Card } from "flowbite-react";
import { Dropdown } from "flowbite-react";
import { useState } from "react";
import { ProductStockCard } from "./ProductStockCard";

const StockCard = () => {
  const [filter, setFilter] = useState("Categories");
  const filterhandle = (val) => {
    setFilter(val);
    axiosClient
      .get(`http://localhost:8080/api/home/filter/${val}`)
      .then((res) => {
        console.log("inside then");
        console.log(res.data);
        // setSearchresult(res.data.filteredProducts);
      })
      .catch((error) => {
        console.log("error occured");
        console.log(error);
      });
  };

  return (
    <Card className="max-w-md w-full">
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
          className=" focus:ring-white bg-transparent"
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
      <div>
        <ProductStockCard />
        <ProductStockCard />
        <ProductStockCard />
        <ProductStockCard />
        <ProductStockCard />
        <ProductStockCard />
      </div>
    </Card>
  );
};

export default StockCard;
