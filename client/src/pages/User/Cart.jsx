import React, { useState } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const Cart = () => {
  const [images, setImages] = useState({
    img1: "https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/116447--1--1560184216.jpeg",
  });
  const [activeImg, setActiveImage] = useState(images.img1);
  const [unitPrice, setUnitPrice] = useState(240.00);
  const [amount, setAmount] = useState(1);
  const [imageClicked, setImageClicked] = useState(false);
  const [productName,setProductName] = useState("Soy Sauce");

  const decreaseAmount = () => {
    if (amount > 1) {
      setAmount((prev) => prev - 1);
    }
  };

  const increaseAmount = () => {
    setAmount((prev) => prev + 1);
  };

  const totalPrice = unitPrice * amount;

  return (
    <div className="flex flex-col" >
    <div>
      <h4 className="text-black1  flex justify-center items-center text-2xl font-semibold py-3">Your Cart Items</h4>
     
      </div>
      <div >
        <table className="w-full">
        <tr className=" text-center text-xl font-semibold py-4">
            <td  className="w-3/5 py-4">Product</td>
            <td className="py-4">Price</td>
            <td className="py-4">Quantity</td>
            <td className="py-4">Total</td>
        </tr>
        <tr className="border-y border-solid text-xl border-[#E5E5E5]  bg-[#f2f2f2]">
            <td className="py-5 w-3/5">
            <div className="flex flex-row gap-20 pl-4">
                <img
                src={activeImg}
                alt="product"
                className="w-[300px] h-[300px] rounded-lg shadow-custom-light"
                />
                <div className="flex flex-col text-xl  justify-center gap-4 ">
                <h4 className="text-black1 text-2xl font-semibold">{productName}</h4>
                <div className="flex flex-row items-center gap-1 text-center text-primary">
  <MdDeleteForever className="text-center w-6 h-6 flex justify-center items-center"/>
  <a href="" >Remove</a>
</div>
                </div>  
            </div>
            </td>
            <td className="">
                <p className="  text-center">LKR {unitPrice.toFixed(2)}</p>
                
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
        <tr>
            <td className="w-3/5 py-4 ">
            <div className="flex flex-row gap-2 text-primary pl-5 flex items-center text-xl ">
             <FaArrowAltCircleLeft className="w-5 h-5" />  
            <a href="" className=""> Back to shopping</a>
            </div>
            </td>
            <td className="py-4"> 
            <p className="font-semibold text-xl text-center">Sub Total</p>
            </td>
            <td className="py-4 text-center">
            <p className="   font-semibold text-xl">LKR {totalPrice.toFixed(2)}</p>
            </td>
            <td className="py-4 items-center"> 
            <button className='bg-primary m-auto text-white font-semibold py-3 px-10 rounded-xl h-full hidden lg:block'>Add to Cart</button> 
            </td>
        </tr>
        </table>
        {/* comment */}
      </div>
    </div>
  );
};

export default Cart;
