
"use client";

import { Button, Navbar } from "flowbite-react";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";

const Nav = ({ isActive }) => {
    return (
        <Navbar container className=" py-5">
            <Navbar.Brand href="/user" className="">
                {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Pramuka Products</span>
            </Navbar.Brand>
            <div className="flex gap-4 md:order-2 items-center pt-2 ">
                <div className="    flex justify-center items-center">
                    <div className="relative mr-2">
                        <div className="absolute left-4 bottom-4">
                            <p className="flex h-1 w-1 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">3</p>
                        </div>
                        <FiShoppingCart className="cursor-pointer text-2xl" />

                    </div>
                </div>
                <FaRegUserCircle className=" cursor-pointer text-2xl" />
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link href="/user" className={`hover:text-primary ${isActive === "home" ? "text-primary" : ""}`}>Home</Navbar.Link>
                <Navbar.Link href="#" className="hover:text-primary">About</Navbar.Link>
                <Navbar.Link href="#" className="hover:text-primary">Pricing</Navbar.Link>
                <Navbar.Link href="#" className="hover:text-primary">Contact</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}


export default Nav;
