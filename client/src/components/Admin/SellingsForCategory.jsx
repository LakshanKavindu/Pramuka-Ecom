"use client";

import axios from "axios";
import { Card } from "flowbite-react";
import { useEffect, useState } from "react";

const SellingsForCategory = () => {
    const [catsellings,setCatsellings]=useState([])
    const getsellings=()=>{
        axios.get('http://localhost:8080/api/admin/sellings')
        .then((res)=>{
            setCatsellings(res.data.sellings)
           
        }).catch((error)=>{
            console.log(error)
        })
    }
    useEffect(()=>{
        getsellings();

    },[])
  return (
    <Card className="max-w-sm mt-10">
      <h5 className="mb-3 text-base font-semibold text-gray-900 lg:text-xl dark:text-white">Sellings</h5>
      <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
        Sellings of Pramuka stores for each product Category
      </p>
      <ul className="my-4 space-y-3">
       {catsellings.map((item,index)=>{
        return(
            <div key={index}>
                <li>
            <a
              href="#"
              className="group flex items-center justify-between rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
            >
              <div className="flex items-center">
                <img src="https://img.icons8.com/?size=100&id=gD9WHI7lKKYP&format=png&color=000000" className="h-6 w-6" alt="icon" />
                <span className="ml-3 whitespace-nowrap">{item.productCategory}</span>
              </div>
              <span className="flex items-center">
              {(index==0 && item._sum.productSold>0 )? <span className="ml-3 inline-flex items-center justify-center rounded bg-gray-200 px-2 py-0.5 text-xs font-medium text-gray-500 dark:bg-gray-700 dark:text-gray-400">
                  Popular
                </span>:""}
                <span className="ml-3 flex-1">{item._sum.productSold}</span>
               
              </span>
            </a>
          </li>
            </div>
        )
       })}
      
      </ul>
    </Card>
  );
};

export default SellingsForCategory;
