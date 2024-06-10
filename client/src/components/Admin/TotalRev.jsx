"use client";

import { Card } from "flowbite-react";
import axios from "axios";
import { useActionData } from "react-router-dom";
import { useEffect, useState } from "react";

const TotalRev = () => {

  const [totalrevenue, setTotalrevenue] = useState(0);
  const [today,setToday]=useState( new Date())

  const getTotalRev = () => {
    console.log("gtr")
    axios
      .get("http://localhost:8080/api/admin/totalrevenue")
      .then((res) => {
        
        setTotalrevenue(res.data.TotalRev);
        console.log(res)
      })
      .catch((e) => {
        console.log(e);
      });
  };
  

  useEffect(() => {
    getTotalRev();
    setToday(new Date())
  }, []);
  return (
    <Card href="#" className="max-w-sm">
      <h5 className="mb-3 text-base font-semibold text-gray-900 lg:text-xl dark:text-white">
        Your Total Revanue
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Your total revenue until {today.toLocaleDateString()} is<br></br> <b>Rs {totalrevenue}.00</b>
       
      </p>
    </Card>
  );
};

export default TotalRev;
