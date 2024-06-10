"use client";

import { Card } from "flowbite-react";

const TotalRev=()=>{
    // axios.get('')
    const today = new Date();
    
    return(
        <Card href="#" className="max-w-sm">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
       Your Total Revanue 
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      
      Your total revenue until {today.toLocaleDateString()} is Rs 230,443.
      </p>
    </Card>
    )
}

export default TotalRev;