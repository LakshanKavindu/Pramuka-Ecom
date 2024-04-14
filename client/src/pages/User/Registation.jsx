import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ContactNoInput from "../../components/User/inputField/withIcon/ContactNoInput";
import PassowrdInput from "../../components/User/inputField/withIcon/PassowrdInput";
import NameInput from "../../components/User/inputField/withIcon/NameInput";

const Registation = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [contactNo, setContactNo] = useState("");
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center w-100 h-[90vh]">
      <div className="  sm:w-[50%] xs:w-100  ">
        <h1 className="text-black1 font-semibold antialiased text-2xl mb-10">
          {"Let's go!"}
        </h1>
        <form className="max-w-sm mx-auto">
          <NameInput name={name} setName={setName} />
          <ContactNoInput contactNo={contactNo} setContactNo={setContactNo} />
          <PassowrdInput
            lable="Choose Password"
            password={password}
            setPassword={setPassword}
          />
          <button
            type="submit"
            className="text-white mt-10 bg-gradient-to-r from-primary to-secondary focus:ring-4 focus:outline-none focus:ring-secondary font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-gradient-to-r from-primary to-secondary   dark:focus:ring-primary"
          >
            Sign up
          </button>
        </form>
        <div>
          <p className="mt-5 text-black1 dark:text-white text-sm text-center">
            Already have an account?{" "}
            <span className="text-secondary cursor-pointer" onClick={() => navigate('/')}>Login</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registation;
