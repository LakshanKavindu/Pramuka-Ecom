
"use client";

import { Button, Navbar } from "flowbite-react";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";

const Nav = () => {
    return (
        <Navbar fluid rounded>
            <Navbar.Brand href="/user">
                {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Pramuka Products</span>
            </Navbar.Brand>
            <div className="flex gap-2 md:order-2">
                <FiShoppingCart className=" cursor-pointer" />
                <FaRegUserCircle className=" cursor-pointer" />
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link href="#" active>
                    Home
                </Navbar.Link>
                <Navbar.Link href="#">About</Navbar.Link>
                <Navbar.Link href="#">Services</Navbar.Link>
                <Navbar.Link href="#">Pricing</Navbar.Link>
                <Navbar.Link href="#">Contact</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}


export default Nav;