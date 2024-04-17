import { Button, Navbar } from "flowbite-react";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Nav = ({ isActive }) => {
  const handleContactClick = () => {
    // Programmatically navigate to the current URL with an appended hash
    const footer = document.getElementById("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Navbar container className=" py-5 shadow-bottom-shadow">
      <Navbar.Brand href="/user" className="">
        {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Pramuka Stores
        </span>
      </Navbar.Brand>
      <div className="flex gap-4 md:order-2 items-center pt-2 ">
        <div className="    flex justify-center items-center">
          <div className="relative mr-2">
            <div className="absolute left-4 bottom-4">
              <p className="flex h-1 w-1 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                3
              </p>
            </div>
            <Link to="/cart">
              <FiShoppingCart className="cursor-pointer text-2xl" />
            </Link>
          </div>
        </div>
        <Link to="/user/profile">
          <FaRegUserCircle className=" cursor-pointer text-2xl" />
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          href="/user"
          className={`hover:text-primary ${
            isActive === "home" ? "text-primary" : ""
          }`}
        >
          Home
        </Navbar.Link>
        <Navbar.Link href="#" className="hover:text-primary">
          About
        </Navbar.Link>
        <Navbar.Link
          href="#"
          className="hover:text-primary"
          onClick={handleContactClick}
        >
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
