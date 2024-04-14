import { useState } from "react";
import ContactNoInput from "../../components/User/inputField/withIcon/ContactNoInput";
import PassowrdInput from "../../components/User/inputField/withIcon/PassowrdInput";

const Login = () => {
  const [password, setPassword] = useState("");
  const [contactNo, setContactNo] = useState("");
  return (
    <div className="flex items-center justify-center w-100 h-[90vh]">
      <div className="  sm:w-[50%] xs:w-100  ">
        <h1 className="text-black1 font-semibold antialiased text-lg mb-10">
          Welcome back!
        </h1>
        <form className="max-w-sm mx-auto">
          <ContactNoInput contactNo={contactNo} setContactNo={setContactNo} />
          <PassowrdInput
            lable="Password"
            password={password}
            setPassword={setPassword}
          />
          <button
            type="submit"
            className="text-white mt-10 bg-gradient-to-r from-primary to-secondary focus:ring-4 focus:outline-none focus:ring-secondary font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-gradient-to-r from-primary to-secondary   dark:focus:ring-primary"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
