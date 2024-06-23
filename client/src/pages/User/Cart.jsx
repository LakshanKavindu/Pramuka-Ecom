import React, { useState, useEffect } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import CartItems from "../../components/User/CartItems.jsx";
import Nav from "../../components/User/Navbar.jsx";
import Footern from "../../components/User/Footer.jsx";
import axios from "axios";

const Cart = () => {
  const [images, setImages] = useState({
    img1: "https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/116447--1--1560184216.jpeg",
  });

  const [activeImg, setActiveImage] = useState("");
  const [unitPrice, setUnitPrice] = useState(240.0);
  const [productName, setProductName] = useState("Soy Sauce");
  const [mycart,setMycart]=useState([])

const getmycart=()=>{
  const user = JSON.parse(sessionStorage.getItem('user'));
  
  axios.get(`http://localhost:8080/api/product/getcart/${user.email}`)
  .then((res)=>{
    console.log('my',res.data)
    setMycart(res.data)
  })
  .catch((error)=>{
    console.log(error)
  })
}


  useEffect(() => {
    setActiveImage(images.img1);
    getmycart()
  }, []);

  return (
    <>
      <Nav isActive={""} />
      <div className="flex flex-col">
        <div>
          <h4 className="text-black1  flex justify-center items-center text-2xl font-semibold py-3">
            Your Cart Items
          </h4>
        </div>
        <div>
          <table className="w-full">
            <tr className=" text-center text-xl font-semibold py-4">
              <td className="w-3/5 py-4">Product</td>
              <td className="py-4">Price</td>
              <td className="py-4">Quantity</td>
              <td className="py-4">Total</td>
            </tr>

            {/* <CartItems
              activeImg={activeImg}
              productName={productName}
              unitPrice={unitPrice}
            />
            <CartItems
              activeImg={activeImg}
              productName={productName}
              unitPrice={unitPrice}
            />
            <CartItems
              activeImg={activeImg}
              productName={productName}
              unitPrice={unitPrice}
            />
            <CartItems
              activeImg={activeImg}
              productName={productName}
              unitPrice={unitPrice}
            />
            <CartItems
              activeImg={activeImg}
              productName={productName}
              unitPrice={unitPrice}
            /> */}
        
        {
          mycart.map((item)=>(
            <CartItems
            activeImg={activeImg}
            productName={productName}
            unitPrice={unitPrice}
            item={item}
          />
          ))
        }
        
            <tr>
              <td className="w-3/5 py-4 ">
                <div className="flex flex-row gap-2 text-primary pl-5 flex items-center text-xl ">
                  <FaArrowAltCircleLeft className="w-5 h-5" />

                  <a href="" className="">
                    {" "}
                    Back to shopping
                  </a>
                </div>
              </td>
              <td className="py-4">
                <p className="font-semibold text-xl text-center">Sub Total</p>
              </td>
              <td className="py-4 text-center">
                <p className="   font-semibold text-xl">LKR 20.00</p>
              </td>
              <td className="py-4 items-center">
                <button className="bg-primary m-auto text-white font-semibold py-3 px-10 rounded-xl h-full hidden lg:block">
                  Add to Cart
                </button>
              </td>
            </tr>
          </table>
          {/* comment */}
        </div>
      </div>
      <Footern />
    </>
  );
};

export default Cart;
