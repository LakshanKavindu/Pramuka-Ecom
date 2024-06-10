import { useState } from "react";
import { Button, Navbar, Avatar } from "flowbite-react";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import axiosClient from "../../utils/axiosClient";
import axios from "axios";
import RegistrationPopup from "./RegistrationPopup";

const Nav = ({ isActive }) => {
  const [isLoggin, setIsLoggin] = useState(
    sessionStorage.getItem("isLoggin") === "true" ? true : false
  );
  const [user, setUser] = useState(
    JSON.parse(sessionStorage.getItem("user")) || {}
  );

  const [openRegistration, setOpenRegistration] = useState(
    sessionStorage.getItem("isUpdateContact") === "false" ? true : false
  );
  const handleContactClick = () => {
    // Programmatically navigate to the current URL with an appended hash
    const footer = document.getElementById("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log(tokenResponse);

      const accessToken = tokenResponse.access_token;

      try {
        // Fetch user profile information using the access token
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v1/userinfo?alt=json",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        // The user profile information
        const userProfile = res.data;
        axiosClient
          .post("/user/login", {
            email: userProfile.email,
            userName: userProfile.name,
            imageUrl: userProfile.picture,
          })
          .then((res) => {
            console.log(res.data, "login");
            if (!res.data.userExist) {
              setOpenRegistration(true);
              sessionStorage.setItem("isLoggin", false);
              setIsLoggin(false);
              sessionStorage.setItem("isUpdateContact", false);
            } else {
              sessionStorage.setItem("isLoggin", true);
              setIsLoggin(true);
            }
            sessionStorage.setItem("role", res.data.role);
            sessionStorage.setItem("token", res.data.token);
            sessionStorage.setItem(
              "user",
              JSON.stringify({
                email: userProfile.email,
                userName: userProfile.name,
                imageUrl: userProfile.picture,
              })
            );

            setUser({
              email: userProfile.email,
              userName: userProfile.name,
              imageUrl: userProfile.picture,
            });
            console.log(res);
          });
      } catch (error) {
        console.error("Failed to fetch user profile: ", error);
      }
    },
    onError: (error) => {
      console.error("Login failed: ", error);
    },
  });

  return (
    <>
      <Navbar container className=" py-5 shadow-bottom-shadow">
        <Navbar.Brand href="/" className="">
          {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Pramuka Stores
          </span>
        </Navbar.Brand>
        {isLoggin ? (
          <div className="flex gap-4 md:order-2 items-center justify-center">
            <div className="pt-2 flex justify-center items-center">
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
            <div className="md:flex hidden justify-center">
              <Link to="/user/profile">
                <Avatar img={user.imageUrl} rounded bordered />
              </Link>
            </div>
            <Navbar.Toggle />
          </div>
        ) : (
          <div className="flex gap-4 md:order-2 items-center pt-2 ">
            <Button className="bg-primary text-white" onClick={() => login()}>
              Login
            </Button>

            <Navbar.Toggle />
          </div>
        )}
        <Navbar.Collapse>
          <div className="flex md:hidden">
            <Navbar.Link href="/user/profile">
              <div className="flex flex-row">
                <Avatar img={user.imageUrl} rounded bordered />
                <div className="flex flex-col ml-4">
                  <p className="text-sm font-semibold">{user.userName}</p>
                  <p className="text-xs text-gray-400">{user.email}</p>
                </div>
              </div>
            </Navbar.Link>
          </div>
          <Navbar.Link
            href="/"
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
      <RegistrationPopup
        openModal={openRegistration}
        setOpenModal={setOpenRegistration}
        setIsLoggin={setIsLoggin}
        email={user.email}
      />
    </>
  );
};

export default Nav;
