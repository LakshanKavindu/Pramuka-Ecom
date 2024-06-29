import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import logo from "../../assets/images/logo.png";

const Footern = () => {
  return (
    <Footer
      container
      className="mt-10 bg-gray-50 shadow-footer-shadow max-w-[1440px]"
      id="footer"
    >
      <div className="w-full px-1 ">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="https://google.com"
              src={logo}
              alt="Flowbite Logo"
              name="P Store"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 ">
            <div>
              <Footer.Title title="Links" className="text-primary text-lg" />
              <Footer.LinkGroup col className="text-black2 font-semibold">
                <Footer.Link href="#">Home</Footer.Link>
                <Footer.Link href="#">About Us</Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div>
              <Footer.Title title="Legal" className="text-primary  text-lg" />
              <Footer.LinkGroup col className="text-black2 font-semibold">
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title
                title="Contact Us"
                className="text-primary text-lg"
              />
              <Footer.LinkGroup col className="text-black2 font-semibold">
                <Footer.Link href="#">Tel : +94 70 465 4211</Footer.Link>
                <Footer.Link href="#">Email : pramuka@gmail.com</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>

        <div className="w-full sm:flex sm:items-center sm:justify-between pt-5">
          <Footer.Copyright
            href="#"
            by="P Stores™"
            year={2024}
            className="text-black"
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} className="text-black" />
            <Footer.Icon href="#" icon={BsInstagram} className="text-black" />
          </div>
        </div>
      </div>
    </Footer>
  );
};
export default Footern;
