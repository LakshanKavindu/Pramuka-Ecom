import { useEffect, useState } from "react";
import closeIcon from "../../../src/assets/icon-close-white.svg";
import prevIcon from "../../../src/assets/icon-previous.svg";
import nextIcon from "../../../src/assets/icon-next.svg";
import { data } from "../../constants/images";
import Nav from "../../components/User/Navbar";
import Footern from "../../components/User/Footer";
import { LuShoppingCart } from "react-icons/lu";
import { useParams } from "react-router-dom";
import axiosClient from "../../utils/axiosClient";

const ProductPreview = () => {
  const { productid } = useParams();

  const [discount, setDiscount] = useState(0);
  const [cateogry, setCategory] = useState("");
  const [productNmae, setProductName] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [previousPrice, setPreviousPrice] = useState(0);
  const [qty, setQty] = useState(0);
  const products = [...data];
  const [value, setValue] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [modal, setModal] = useState(true);

  useEffect(() => {
    axiosClient
      .get(`/home/product/${productid}`)
      .then((res) => {
        console.log("product data", res.data.product);
        setCategory(res.data.product.productCategory);
        setProductName(res.data.product.productName);
        setBrand(res.data.product.productBrand);
        setDescription(res.data.product.productDescription);
        setPrice(res.data.product.productPrice);
        setPreviousPrice(res.data.product.productPrevPrice);

        if (previousPrice > 0) {
          setDiscount(
            Math.round(((previousPrice - price) / previousPrice) * 100)
          );
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const largeImage = products[value].largeImg;

  const fixedPrice = price.toFixed(2);

  const totalPrice = fixedPrice * qty;
  const totalPriceFixed = totalPrice.toFixed(2);

  const decrease = () => {
    if (qty === 0) {
      return;
    }
    {
      setQty((prev) => prev - 1);
    }
  };

  const toggleModal = () => {
    setModal((prev) => !prev);
  };

  const goBack = () => {
    value === 0 ? setValue(0) : setValue((prev) => prev - 1);
  };

  const goForward = () => {
    value === products.length - 1
      ? setValue(products.length - 1)
      : setValue((prev) => prev + 1);
  };

  return (
    <main>
      <Nav isActive={"product"} />
      <div className="flex flex-col justify-between lg:flex-row gap-18 lg:items-center">
        <div className="image p-10 md:basis-1/2 md:flex md:flex-col md:justify-between">
          <div className="hidden md:block large-image">
            <img
              onClick={toggleModal}
              className="object-cover cursor-pointer rounded-xl w-[400px] h-[400px]"
              src={largeImage}
              alt="snekers-photo"
            />
          </div>
          <div className="md:hidden large-image">
            <img
              onClick={goBack}
              className="bg-white rounded-full p-4 absolute top-60 left-12 cursor-pointer"
              src={prevIcon}
              alt="go-back"
            />
            <img
              className="w-[100%] h-[300px] object-cover"
              src={largeImage}
              alt="snekers-photo"
            />
            <img
              onClick={goForward}
              className="bg-white rounded-full p-4  absolute top-60 right-12 cursor-pointer"
              src={nextIcon}
              alt="go-forward"
            />
          </div>
          <div className="small-images hidden md:flex mt-7 justify-between w-[400px]">
            {data.map((img, idx) => {
              return (
                <div key={img.id} className="single-image">
                  <img
                    onClick={() => setValue(idx)}
                    className="w-[80px] cursor-pointer rounded-xl transition-all hover:opacity-25 hover:border-[3px] border-primary"
                    src={img.smallImg}
                    alt="product-photo"
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div
          className={`${
            modal ? "hidden" : "hidden md:block"
          } absolute -top-[20%] right-0 -bottom-[20%] left-0 bg-lightBlack`}
        >
          <div
            className={
              "basis-1/2 flex flex-col justify-between absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
            }
          >
            <div className="large-image">
              <img
                className="w-[400px] h-[400px] rounded-xl cursor-pointer"
                src={largeImage}
                alt="snekers-photo"
              />
              <img
                onClick={toggleModal}
                className="w-[20px] h-[20px] absolute -top-8 left-[95%] transition-all cursor-pointer hover:scale-150"
                src={closeIcon}
                alt="close-icon"
              />
              <img
                onClick={goBack}
                className="bg-white p-4 rounded-full absolute top-[36%] -translate-x-[20px] cursor-pointer transition-all hover:scale-150"
                src={prevIcon}
                alt="previous"
              />
              <img
                onClick={goForward}
                className="bg-white p-4 rounded-full absolute top-[36%] left-[95%] cursor-pointer transition-all hover:scale-150"
                src={nextIcon}
                alt="next"
              />
            </div>
            <div className="small-images flex mt-7 justify-around w-[400px]">
              {data.map((img, idx) => {
                return (
                  <div key={img.id} className="single-image">
                    <img
                      onClick={() => setValue(idx)}
                      className="w-[60px] cursor-pointer rounded-xl transition-all hover:border-[3px] border-orange"
                      src={img.smallImg}
                      alt="product-photo"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="description p-6 md:basis-1/2 md:py-[40px]">
          <p className="text-primary text-[14px] tracking-widest uppercase font-[700] mb-6">
            {cateogry.toLowerCase()}
          </p>
          <h1 className="text-3xl md:text-4xl capitalize font-[700] mb-1">
            {productNmae}
          </h1>
          <h1 className="text-md text-gray-400 font-semibold ">{brand}</h1>
          <p className="hidden md:block text-darkGrayishBlue my-10 leading-7">
            {description}
          </p>

          <div className="price flex items-center">
            <span className="text-3xl font-[700] mr-4">
              LKR{fixedPrice * (qty == 0 ? 1 : qty)}
            </span>
            {previousPrice > 0 && (
              <span className="bg-paleOrange text-primary font-[700] py-1 px-2 rounded-lg">
                {discount}% OFF
              </span>
            )}
            {previousPrice > 0 && (
              <p className="md:hidden line-through text-red-600 font-[700] translate-x-[100px] mb-2">
                LKR{previousPrice * (qty == 0 ? 1 : qty)}
              </p>
            )}
          </div>
          {previousPrice > 0 && (
            <p className="hidden md:block line-through text-red-600 font-[700] mt-2">
              LKR{previousPrice * (qty == 0 ? 1 : qty)}
            </p>
          )}

          <div className="buttons-container flex flex-col md:flex-row mt-8">
            <div className="state w-[100%] flex justify-around md:justify-center items-center space-x-10 bg-lightGrayishBlue rounded-lg p-3 md:p-2 md:mr-4 md:w-[150px]">
              <button
                onClick={decrease}
                className="minus text-[24px] md:text-[20px] font-[700] text-primary transition-all hover:opacity-50"
              >
                -
              </button>
              <p className="md:text-[14px] font-bold">{qty}</p>
              <button
                onClick={() => setQty((prev) => prev + 1)}
                className="plus text-[24px] md:text-[20px] font-[700] text-primary transition-all hover:opacity-50"
              >
                +
              </button>
            </div>
            <button
              className={`inline-flex justify-center items-center border-none rounded-lg font-[700] mt-[10px] px-[30px] py-[10px] md:py-[5px] md:text-[16px] transition-all btn-shadow ${
                qty === 0
                  ? "bg-paleOrange text-palewhite cursor-not-allowed"
                  : "bg-primary text-white hover:opacity-50"
              }`}
              disabled={qty === 0}
              onMouseEnter={() => qty === 0 && setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <LuShoppingCart />
              <span className="ml-2">Add to cart</span>
            </button>
          </div>
        </div>
      </div>
      <Footern />
    </main>
  );
};

export default ProductPreview;
