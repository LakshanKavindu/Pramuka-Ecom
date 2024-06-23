import { useState } from "react";
import { Button, Navbar, Avatar, Dropdown } from "flowbite-react";
import { FiShoppingCart } from "react-icons/fi";
import { FaCaretDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import axiosClient from "../../utils/axiosClient";
import RegistrationPopup from "./RegistrationPopup";

const Nav = ({ isActive }) => {
  const navigate = useNavigate();
  const [isLoggin, setIsLoggin] = useState(
    sessionStorage.getItem("isLoggin") === "true" ? true : false
  );
  const [userRole, setUserRole] = useState(
    sessionStorage.getItem("role") || ""
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
      await axiosClient
        .post("/user/login", {
          token: tokenResponse.access_token,
        })
        .then((res) => {
          console.log(res.data, "login");
          if (!res.data.userExist) {
            setOpenRegistration(true);
            sessionStorage.setItem("isUpdateContact", false);
          }
          sessionStorage.setItem("isLoggin", true);
          setIsLoggin(true);
          sessionStorage.setItem("role", res.data.role);
          sessionStorage.setItem("token", res.data.token);
          sessionStorage.setItem(
            "user",
            JSON.stringify({
              email: res.data.user.email,
              userName: res.data.user.username,
              imageUrl: res.data.user.image,
            })
          );
          setUserRole(res.data.role);
          setUser({
            email: res.data.user.email,
            userName: res.data.user.username,
            imageUrl: res.data.user.image,
          });
        })
        .catch((e) => {
          console.error("Failed to fetch user profile: ", e.message);
        });
    },
    onError: (error) => {
      console.error("Login failed: ", error);
    },
  });
  const handleLogout = () => {
    setIsLoggin(false);
    setUserRole("");
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <>
      <Navbar
        container
        className=" pt-3 pb-2 shadow-bottom-shadow fixed w-full max-w-[1440px] top-0 z-50"
      >
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
            <div className="md:flex hidden justify-center mr-5">
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <div className="flex flex-row justify-center items-center">
                    <Avatar img={user.imageUrl} rounded bordered />
                    <div className="flex flex-row items-baseline mx-3 text-base font-medium">
                      <span
                        style={{
                          fontFamily: "Playwrite NG Modern",
                        }}
                        className="text-sm pr-2"
                      >
                        👋Hi,
                      </span>

                      {user.userName}
                    </div>
                    <FaCaretDown />
                  </div>
                }
              >
                <Dropdown.Header>
                  <div className="flex flex-row">
                    <Avatar img={user.imageUrl} rounded bordered />
                    <div className="flex flex-col ml-4">
                      <p className="text-sm font-semibold">{user.userName}</p>
                      <p className="text-xs text-gray-400">{user.email}</p>
                    </div>
                  </div>
                </Dropdown.Header>
                <Link to="/user/profile">
                  <Dropdown.Item>View Profile</Dropdown.Item>
                </Link>
                <Dropdown.Item onClick={handleLogout}>Log Out</Dropdown.Item>
              </Dropdown>
            </div>
            <Navbar.Toggle />
          </div>
        ) : (
          <div className="flex gap-4 md:order-2 items-center">
            <Button
              className="bg-primary text-white h-[40px]"
              onClick={() => login()}
              size={"sm"}
            >
              Login
            </Button>
            <Navbar.Toggle />
          </div>
        )}
        <Navbar.Collapse>
          <div className="flex flex-row md:hidden">
            <Avatar img={user.imageUrl} rounded bordered />
            <div className="flex flex-col ml-4">
              <p className="text-sm font-semibold">{user.userName}</p>
              <p className="text-xs text-gray-400">{user.email}</p>
            </div>
          </div>
          {userRole === "ADMIN" && (
            <Navbar.Link
              href="/admin/dashboard"
              className="hover:text-secondary text-gray-900 font-bold"
            >
              Admin Dashboard
            </Navbar.Link>
          )}

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
          <Navbar.Link
            href="/user/profile"
            className="hover:text-primary flex md:hidden"
          >
            View Profile
          </Navbar.Link>
          <Navbar.Link
            className="hover:text-primary flex md:hidden"
            onClick={handleLogout}
          >
            Logout
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <RegistrationPopup
        openModal={openRegistration}
        setOpenModal={setOpenRegistration}
      />
    </>
  );
};

export default Nav;
