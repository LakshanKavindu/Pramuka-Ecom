import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";

export default function CartItems(props) {
    const [amount, setAmount] = useState(1);
    const decreaseAmount = () => {
        if (amount > 1) {
          setAmount((prev) => prev - 1);
        }
      };
    
      const increaseAmount = () => {
        setAmount((prev) => prev + 1);
      };
      const totalPrice = props.unitPrice * amount;

  return (
    <tr className="border-y border-solid text-xl border-[#E5E5E5]  bg-[#f2f2f2] ">
    <td className="py-5 w-3/5">
    <div className="flex flex-row gap-20 pl-4">
        <img
        src={props.activeImg}
        alt="product"
        className="w-[200px] h-[200px] rounded-lg shadow-custom-light"
        />
        <div className="flex flex-col text-xl  justify-center gap-4 ">
        <h4 className="text-black1 text-2xl font-semibold">{props.productName}</h4>
        <div className="flex flex-row items-center gap-1 text-center text-primary">
<MdDeleteForever className="text-center w-6 h-6 flex justify-center items-center"/>
<a href="" >Remove</a>
</div>
        </div>  
    </div>
    </td>
    <td className="">
        <p className="  text-center">LKR {props.unitPrice.toFixed(2)}</p>
        
    </td>
    <td className=" text-center ">

  <div className="flex flex-row items-center m-auto border border-solid border-primary rounded-xl w-fit">
    <button
      className="px-3   text-secondary text-[2rem] "
      onClick={decreaseAmount}
    >
      -
    </button>
    <span className=" px-3 rounded-lg text-black1  ">
      {amount}
    </span>
    <button
      className=" px-3   text-secondary text-[1.5rem] "
      onClick={increaseAmount}
    >
      +
    </button>
  </div>
    </td>
    <td className="">
    <p className="  text-center ">LKR {totalPrice.toFixed(2)}</p>
    </td>

 </tr>
  )
}

// This is a comment