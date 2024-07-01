("use client");
import AllProducts from "../../components/User/AllProducts";
import Footer from "../../components/User/Footer";
import Nav from "../../components/User/Navbar";
import Slider from "../../components/User/Slider";
import sideImage from "../../assets/images/sideImage.png";
import Dropdown from "react-multilevel-dropdown";
import { Card } from "flowbite-react";
import "../../Styles/User/home.css";
import { useEffect, useState } from "react";
import axios from "axios";
import axiosClient from "../../utils/axiosClient";
import { FaChevronDown } from "react-icons/fa6";

const Home = () => {
  const [searchval, setSearchval] = useState("");
  const [searchresult, setSearchresult] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [filter, setFilter] = useState("Categories");
  const [items, setItems] = useState([
    "chocolate",
    "biscuit maliban",
    "biscuits munchee",
  ]);
  const [brands, setBrands] = useState([]);

  const filterhandle_brand = (val) => {
    setIsSearching(true);
    setSearchval("");
    setFilter(val);
    axios
      .get(`http://localhost:8080/api/home/filterbrand/${val}`)
      .then((res) => {
        console.log("inside then");
        console.log(res.data);
        setSearchresult(res.data.filteredProducts);
        setSearchval("");
      })
      .catch((error) => {
        console.log("error occured");
        console.log(error);
      });
  };

  const filterhandle = (val) => {
    setIsSearching(true);
    setSearchval("");
    setFilter(val);
    axios
      .get(`http://localhost:8080/api/home/filter/${val}`)
      .then((res) => {
        console.log("inside then");
        console.log(res.data);
        setSearchresult(res.data.filteredProducts);
        setSearchval("");
      })
      .catch((error) => {
        console.log("error occured");
        console.log(error);
      });
  };

  const handleSearch = () => {
    setIsSearching(true);
    setFilter("Categories");

    console.log("handle search search value", searchval);
    axios
      .get(`http://localhost:8080/api/home/search/${searchval}`)
      .then((res) => {
        setSearchresult(res.data.searchedProducts);
        setSearchval("");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getAllProducts = () => {
    axiosClient
      .get("/home/productnames")
      .then((res) => {
        setItems(res.data.send);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(items);
  };

  const getbrands = () => {
    axiosClient
      .get("/home/brands")
      .then((res) => {
        setBrands(res.data);
        console.log("brandssss", res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    setIsSearching(false);
    getAllProducts();
    getbrands();
  }, []);
  return (
    <div>
      <Nav isActive={"home"} />
      <Slider />

      <div className=" px-20 mb-8">
        <div className="">
          <form className="max-w-md mt-8 flex min-w-full justify-center flex-wrap">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative w-[700px] min-w-[300px]">
              <div className="absolute inset-y-0 start-2.5 flex items-center  z-40">
                <Dropdown
                  outline
                  title={filter}
                  // gradientDuoTone="pinkToOrange"
                  label={<span className="text-black">{filter}</span>}
                  // dismissOnClick={false}
                  className=" focus:ring-white bg-transparent bg-white "
                  value={filter}
                >
                  <Dropdown.Item
                    value="All Products"
                    onClick={() => {
                      setIsSearching(false);
                      setFilter("Categories");
                      setSearchval("");
                    }}
                  >
                    All Products
                  </Dropdown.Item>

                  {brands.map((cat) => (
                    <Dropdown.Item
                      key={cat.category}
                      value={cat.category}
                      onClick={() => {
                        filterhandle(cat.category);
                      }}
                    >
                      {cat.category}
                      {cat.brands.length > 1 && (
                        <Dropdown.Submenu>
                          {cat.brands.map((brand) => (
                            <Dropdown.Item
                              key={brand}
                              value={brand}
                              onClick={(e) => {
                                e.stopPropagation();
                                filterhandle_brand(brand);
                              }}
                            >
                              {brand}
                            </Dropdown.Item>
                          ))}
                        </Dropdown.Submenu>
                      )}
                    </Dropdown.Item>
                  ))}
                </Dropdown>
                <FaChevronDown className=" text-gray-400 ml-2 text-[0.8rem]" />
              </div>

              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-36 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 z-10"
                required={true}
                onChange={(e) => {
                  setSearchval(e.target.value);
                }}
                value={searchval}
              />
              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  handleSearch();
                }}
                disabled={!searchval}
                className="text-white w-40 absolute end-2.5 bottom-2.5 bg-primary hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 search_btn"
              >
                <span className="search_bar_text">Your Product</span>
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none search_icon">
                  <svg
                    className="w-4 h-4 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
              </button>
              {/* floating search */}
              <div className="flex-column absolute w-full z-50 bg-white shadow-md ">
                {items
                  .filter((item) => {
                    return (
                      searchval &&
                      item.toLowerCase().includes(searchval.toLowerCase())
                    );
                  })
                  .map((item, index) => {
                    return (
                      <div
                        className="ml-30"
                        key={index}
                        onClick={() => {
                          setSearchval(item);

                          console.log("item", item);
                          console.log("serchval", searchval);
                          // handleSearch()
                        }}
                      >
                        <div className="w-full p-2 pl-6 hover:bg-gray-200">
                          <p className="font-small text-gray-600 ">{item}</p>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </form>
        </div>
      </div>

      <AllProducts isSearching={isSearching} searchresult={searchresult} />
      <div></div>

      <Card className="border-none shadow-none mt-10">
        <div className="flex flex-wrap justify-evenly items-center px-14  card_container gap-6">
          <div className="items-center justify-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
            <img src={sideImage} alt="product1" className="w-48" />
          </div>
          <div className="w-[500px] text_container">
            <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white card_container_title">
              Discover a new way to shop
            </h5>
            <p className="mb-5 w-300 text-base text-primary font-bold dark:text-gray-400 sm:text-lg">
              <p> fast, convenient, and from anywhere.</p>
            </p>
            <p className=" text-justify para text-gray-600 font-medium">
              At PStore, we bring you the best selection of products, curated
              for quality and value. Whether you’re at home or on the go, you
              can easily browse our store, find the latest deals, and make
              purchases with just a few clicks. Our user-friendly interface and
              seamless shopping experience ensure that you spend less time
              navigating and more time enjoying your finds. Stay connected and
              keep up with our latest collections, special offers, and seasonal
              trends. We are committed to making your shopping experience as
              efficient and enjoyable as possible.
            </p>
          </div>
        </div>
      </Card>

      <Footer />
    </div>
  );
};
export default Home;
