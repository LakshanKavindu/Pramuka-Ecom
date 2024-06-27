import { useState, useEffect } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import Nav from "../../components/User/Navbar.jsx";
import Footern from "../../components/User/Footer.jsx";
import axios from "axios";
import PlaceOrder from "../../components/User/PlaceOrder.jsx";
import CartCard from "../../components/User/CartCard.jsx";

const Cart = () => {
  const [images, setImages] = useState({
    img1: "https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/116447--1--1560184216.jpeg",
  });

  const [activeImg, setActiveImage] = useState("");

  const [mycart, setMycart] = useState([]);
  const [carttotal, setCarttotal] = useState(0);
  const [isOrdered, setIsOrdered] = useState(false);
  const [openOrderModal, setOpenOrderModal] = useState(false);
  const getmycart = () => {
    const user = JSON.parse(sessionStorage.getItem("user"));

    axios
      .get(`http://localhost:8080/api/product/getcart/${user.email}`)
      .then((res) => {
        console.log("my", res.data);
        setMycart(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setActiveImage(images.img1);
    getmycart();
    setIsOrdered(false);
  }, [isOrdered]);

  const updatesubtotal = () => {
    let total = 0;
    mycart.map((item) => {
      const itemTotal = item.quantity * item.product.productPrice;
      total += itemTotal;
    });
    setCarttotal(total);
  };
  useEffect(() => {
    updatesubtotal();
  }, [mycart]);

  return (
    <>
      <Nav isActive={""} />
      <div className="flex flex-col mt-16">
        <div>
          <h4 className="text-black1  flex justify-center items-center text-2xl font-semibold py-3 my-3">
            Your Cart Items
          </h4>
        </div>
        <div>
          {mycart.length === 0 && (
            <div className="text-3xl flex flex-col items-center mt-[3rem] h-[128px]">
              <h1 className=" text-gray-600 border-dashed border-[3px] border-gray-600 rounded-md p-8">
                Nothing to Show
              </h1>
            </div>
          )}
          <div className=" max-w-[800px] m-auto">
            <div className="flex-col justify-center items-center mx-4 ">
              {mycart.map((item) => {
                return (
                  <CartCard
                    key={item.product.id}
                    item={item}
                    getmycart={getmycart}
                    updatesubtotal={updatesubtotal}
                  />
                );
              })}
            </div>
            <div>
              <div className="w-full flex flex-wrap flex-row justify-end items-center px-4">
                <div className="py-4 ">
                  {mycart.length > 0 && (
                    <p className="font-semibold text-xl text-center ">
                      Sub Total
                    </p>
                  )}
                </div>
                <div className="py-4 text-center">
                  {mycart.length > 0 && (
                    <p className="   font-semibold text-xl ml-10">
                      LKR {carttotal}
                      {".00"}
                    </p>
                  )}
                </div>
                <div className="items-center">
                  {mycart.length > 0 && (
                    <button
                      onClick={() => setOpenOrderModal(true)}
                      className="bg-primary m-auto text-white font-semibold py-3 px-10 rounded-xl h-full ml-10 "
                    >
                      Place Order
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <div className="flex flex-row gap-2 text-primary pl-5 items-center text-xl ">
              <FaArrowAltCircleLeft className="w-5 h-5" />

              <a href="/" className="">
                {" "}
                Back to shopping
              </a>
            </div>
          </div>
        </div>
      </div>
      <PlaceOrder
        openModal={openOrderModal}
        setOpenModal={setOpenOrderModal}
        mycart={mycart}
        setIsOrdered={setIsOrdered}
      />
      <Footern />
    </>
  );
};

export default Cart;
