import { Button } from "flowbite-react";
import { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import axiosClient from "../../utils/axiosClient";
import { useLogedContext } from "../../context/LogedContext";

const ProductCard = ({ item }) => {
  const [cartButton, setCartButton] = useState(false);
  const [amount, setAmount] = useState(1);
  const {isloggedin, setIsloggedin} = useLogedContext()
  const decreaseAmount = () => {
    if (amount > 1) {
      setAmount((prev) => prev - 1);
    }
  };

  const increaseAmount = () => {
    setAmount((prev) => prev + 1);
  };

  const handleAddToCart = () => {
    setCartButton(true);
  };

  const addtocart = () => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    console.log(user.email);
    axiosClient
      .post("/product/addtocart", {
        productid: item.id,
        userid: user.email,
        quantity: amount,
      })
      .then((res) => {
        console.log(res);
        setCartButton(false);
      })
      .catch((Error) => {
        console.log(Error);
      });
  };

  return (
    <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md justify-between">
      <a
        className="relative mx-3 mt-3 flex justify-center h-60 overflow-hidden rounded-xl"
        href="#"
      >
        <img
          className="object-cover"
          src={item.productImage}
          alt="product image"
        />
        {item.productPrevPrice && item.productPrevPrice > 0 ? (
          <span className="absolute top-0 left-0 m-2 rounded-full bg-primary px-2 text-center text-sm font-medium text-white">
            {Math.ceil(
              ((item.productPrevPrice - item.productPrice) /
                item.productPrevPrice) *
                100
            )}
            % OFF
          </span>
        ) : (
          ""
        )}
      </a>
      <div className="mt-4 px-5 pb-5">
        <a href="#">
          <h5 className="text-xl tracking-tight text-black2">
            {item.productName}
          </h5>
        </a>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            LKR
            {item.productPrevPrice && item.productPrevPrice > 0 ? (
              <span className="text-sm text-gray-600 font-semibold line-through mr-1">
                {item.productPrevPrice}
              </span>
            ) : (
              ""
            )}
            <span className="text-3xl font-bold text-slate-900">
              {item.productPrice}
            </span>
          </p>
        </div>

        <div>
          {cartButton ? (
            <div className="flex items-center justify-evenly w-[278px]">
              <div className="flex flex-row items-center w-fit">
                <Button
                  className=" text-white "
                  onClick={decreaseAmount}
                  gradientDuoTone="primary"
                  size="sm"
                >
                  -
                </Button>
                <span className=" px-3  text-black1  ">{amount}</span>
                <Button
                  className="  text-white"
                  onClick={increaseAmount}
                  gradientDuoTone="primary"
                  size="sm"
                >
                  +
                </Button>
              </div>
              <div>
                <Button className=" bg-primary hover:bg-orange-400" size="sm"
                 onClick={() => {
                  addtocart();
                }}
                >
                  <FaCartPlus
                    // disabled={!sessionStorage.getItem("isLoggin")}
                    className="text-center w-4 h-4 flex justify-center items-center text-white cursor-pointer"
                   
                  />
                </Button>
              </div>
            </div>
          ) : (
            <Button
              size="sm"
              fullSized
              className=" cursor-pointer"
              gradientDuoTone="primary"
              onClick={handleAddToCart}
              disabled={!isloggedin}
            >
              Add to Cart
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
