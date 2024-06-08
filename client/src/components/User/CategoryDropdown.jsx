
"use client";

import { Dropdown } from "flowbite-react";


export function CategoryDropdown() {
  return (
    
      <div >
        <Dropdown  
      outline gradientDuoTone="pinkToOrange"
      label={<span className="text-black">Dropdown button</span>}
      dismissOnClick={false}
     
      
   
   >
     <Dropdown.Item>Dashboard</Dropdown.Item>
     <Dropdown.Item>Settings</Dropdown.Item>
     <Dropdown.Item>Earnings</Dropdown.Item>
     <Dropdown.Item>Sign out</Dropdown.Item>
   </Dropdown>
      </div>
  
  );
}
