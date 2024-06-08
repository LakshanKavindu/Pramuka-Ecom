
"use client";

import { Dropdown } from "flowbite-react";
import { useState } from "react";


export function CategoryDropdown(props) {
  const [filter,setFilter]=useState("Categories")
  // const updatevalue=(val)=>{
  //   console.log("value is",val)
  //   props.setFilterv(val)

  // }
  const handleDropdownChange = (value) => {
    
    setFilter(value);
   
    props.updatefiltervalue(value)
   
    // console.log(selectedValue);
    // console.log(filterval)

    props.handleSearch('filter')
  };
  return (

    
      // <div  
        <Dropdown  
      outline gradientDuoTone="pinkToOrange"
      label={<span className="text-black">{filter}</span>}
      // dismissOnClick={false}
     
      value={filter}
     
      
     
      
   
   >
     <Dropdown.Item value="Chocolate"  onClick={()=>{handleDropdownChange("Chocolates")}}>Chocolate</Dropdown.Item>
     <Dropdown.Item value="Biscuits"  onClick={()=>{handleDropdownChange("Biscuits")}}>Biscuits</Dropdown.Item>
     <Dropdown.Item value="Soap"  onClick={()=>{handleDropdownChange("Soap")}}>Soap</Dropdown.Item>
     <Dropdown.Item value="Toothpaste" onClick={()=>{handleDropdownChange("Tooathpsate")}}>Toothpaste</Dropdown.Item>
   </Dropdown>
      // </div>
  
  );
}
