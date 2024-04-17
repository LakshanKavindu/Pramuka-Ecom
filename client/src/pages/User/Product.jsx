import { useState } from "react";
import { LuShoppingCart } from "react-icons/lu";
import Nav from "../../components/User/Navbar";
import Footern from "../../components/User/Footer";


const ProductPage = () => {
  const [images, setImages] = useState({
    img1: "https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/116447--1--1560184216.jpeg",
    img2: "https://supiripola.lk/cdn/shop/products/edinborough-oyster-sauce-385g_grande.jpg?v=1661411504",
    img3: "https://t3.ftcdn.net/jpg/05/79/68/24/360_F_579682479_j4jRfx0nl3C8vMrTYVapFnGP8EgNHgfk.jpg",
    img4: "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-15.png",
  });
  const [activeImg, setActiveImage] = useState(images.img1);
  const [unitPrice, setUnitPrice] = useState(240.0);
  const [previousPrice, setPreviousPrice] = useState(300.5);
  const [amount, setAmount] = useState(1);
  const decreaseAmount = () => {
    if (amount > 1) {
      setAmount((prev) => prev - 1);
    }
  };
  const increaseAmount = () => {
    setAmount((prev) => prev + 1);
  };
  const totalPrice = unitPrice * amount;
  const totalPreviousPrice = previousPrice * amount;

  return (
    <>
      <Nav isActive={"product"} />
      <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center">
        <div className="flex flex-col gap-6 lg:w-2/4">
          <img
            src={activeImg}
            alt=""
            className={`w-full h-full aspect-square object-cover rounded-xl shadow-lg`}
          />
          <div className="flex flex-row justify-between h-24">
            <img
              src={images.img1}
              alt=""
              className={`w-20 h-20 rounded-md cursor-pointer transition-transform duration-300 transform hover:scale-110 ${activeImg === images.img1 ? "border-2 border-primary" : ""
                }`}
              onClick={() => {
                setActiveImage(images.img1);
              }}
            />
            <img
              src={images.img2}
              alt=""
              className={`w-20 h-20 rounded-md cursor-pointer transition-transform duration-300 transform hover:scale-110 ${activeImg === images.img2 ? "border-2 border-primary" : ""
                }`}
              onClick={() => {
                setActiveImage(images.img2);
              }}
            />
            <img
              src={images.img3}
              alt=""
              className={`w-20 h-20 rounded-md cursor-pointer transition-transform duration-300 transform hover:scale-110 ${activeImg === images.img3 ? "border-2 border-primary" : ""
                }`}
              onClick={() => {
                setActiveImage(images.img3);
              }}
            />
            <img
              src={images.img4}
              alt=""
              className={`w-20 h-20 rounded-md cursor-pointer transition-transform duration-300 transform hover:scale-110 ${activeImg === images.img4 ? "border-2 border-primary" : ""
                }`}
              onClick={() => {
                setActiveImage(images.img4);
              }}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:w-2/4">
          <div>
            <span className=" text-secondary font-semibold">Soy Sauce</span>
            <h1 className="text-3xl font-bold">
              Edinborough Soy Sauce Squ. 385g
            </h1>
          </div>
          <p className="text-gray-700">
            Con un'ammortizzazione incredibile per sostenerti in tutti i tuoi
            chilometri, Invincible 3 offre un livello di comfort elevatissimo
            sotto il piede per aiutarti a dare il massimo oggi, domani e oltre.
            Questo modello incredibilmente elastico e sostenitivo, è pensato per
            dare il massimo lungo il tuo percorso preferito e fare ritorno a casa
            carico di energia, in attesa della prossima corsa.
          </p>
          <div className="flex flex-row justify-center gap-1">
            <h6 className="text-base line-through font-normal text-gray-700/75 flex items-end">
              LKR {totalPreviousPrice.toFixed(2)}
            </h6>
            <h6 className="text-2xl items-center font-semibold">
              LKR {totalPrice.toFixed(2)}
            </h6>
          </div>
          <div className="flex flex-row items-center justify-center gap-12">
            <div className="flex flex-row items-center">
              <button
                className="bg-gray-200 py-2 px-5 rounded-lg text-secondary text-3xl"
                onClick={decreaseAmount}
              >
                -
              </button>
              <span className="py-4 px-6 rounded-lg text-black1 font-bold">
                {amount}
              </span>
              <button
                className="bg-gray-200 py-2 px-4 rounded-lg text-secondary text-3xl"
                onClick={increaseAmount}
              >
                +
              </button>
            </div>
            <div>
              <button className="bg-primary text-white font-semibold py-3 px-16 rounded-xl h-full hidden lg:block">
                Add to Cart
              </button>
              <button className="bg-primary text-white font-semibold py-5 px-9 rounded-xl text-2xl lg:hidden">
                <LuShoppingCart />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footern />

    </>
  );
};

export default ProductPage;
