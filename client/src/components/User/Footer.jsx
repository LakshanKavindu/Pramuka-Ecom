
"use client";


import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs"

const Footern = () => {
  return (
    <Footer container className="mt-10 bg-gray-50 shadow-footer-shadow">

      <div className="w-full px-1 ">

        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="https://google.com"
              src="https://flowbite.com/docs/images/logo.svg"
              alt="Flowbite Logo"
              name="ABC Stores"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 ">
            <div>
              <Footer.Title title="about" className="text-black text-lg" />
              <Footer.LinkGroup col className="text-black2 font-semibold">
                <Footer.Link href="#">Flowbite</Footer.Link>
                <Footer.Link href="#">Tailwind CSS</Footer.Link>
              </Footer.LinkGroup>
            </div>
            {/* <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Github</Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div> */}
            <div>

              <Footer.Title title="Legal" className="text-black  text-lg" />
              <Footer.LinkGroup col className="text-black2 font-semibold">
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>

        <div className="w-full sm:flex sm:items-center sm:justify-between pt-5">
          <Footer.Copyright href="#" by="Abc Stores™" year={2024} className="text-black" />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} className="text-black" />
            <Footer.Icon href="#" icon={BsInstagram} className="text-black" />


          </div>
        </div>
      </div>
    </Footer>
  )
}
export default Footern;