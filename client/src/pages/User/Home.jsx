// import 'flowbite';
import AllProducts from "../../components/User/AllProducts";
import Footer from "../../components/User/Footer";
import Nav from "../../components/User/Navbar";
import Slider from "../../components/User/Slider";

import { Card } from "flowbite-react";
// import { product } from "../../../public/product.jpeg"

import "../../Styles/User/home.css";

const Home = () => {
  return (
    <div>
      <Nav isActive={"home"} />
      <Slider />

      <form className="max-w-md mx-auto mt-8">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
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
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for products"
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-primary hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>

      <AllProducts />

      <Card className="border-none bg-orange-50 shadow-none mt-10">
        <div className="flex justify-center items-center px-14 m-auto card_container gap-6">
          <div className="w-[500px] text_container">
            <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white card_container_title">
              Work fast from anywhere
            </h5>
            <p className="mb-5 w-300 text-base text-primary dark:text-gray-400 sm:text-lg">
              <p>Stay up to date and move work forward with Flowbite</p>
            </p>
            <p className=" text-justify para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus voluptatum ut dolor aperiam inventore ullam
              suscipit ea officia nam ducimus id beatae, rem sunt. Quibusdam
              aliquid laborum corrupti ipsam nisi? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Maiores maxime reprehenderit illo
              sed aspernatur repellat placeat quia cumque delectus. Dolores.
            </p>
          </div>
          <div className="items-center justify-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
            <img
              src="https://essstr.blob.core.windows.net/essimg/350x/Small/Pic10602.jpg"
              alt="product1"
              className="w-96 h-96"
            />
          </div>
        </div>
      </Card>

      <Footer />
    </div>
  );
};
export default Home;
