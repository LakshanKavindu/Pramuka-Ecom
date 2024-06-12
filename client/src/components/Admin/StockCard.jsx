"use client";
import axiosClient from "../../utils/axiosClient";
import { Card } from "flowbite-react";
import { useEffect, useState } from "react";

const StockCard = () => {
  return (
    <Card className="max-w-md w-full">
      <h5 className="mb-3 text-base font-semibold text-gray-900 lg:text-xl dark:text-white">
        Your Total Stock
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Your total stock is <br></br> <b>Rs {totalstock}.00</b>
      </p>
    </Card>
  );
};

export default StockCard;
