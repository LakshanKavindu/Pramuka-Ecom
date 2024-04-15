import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "flowbite-react";
import { FaWhatsapp } from "react-icons/fa";
import PasswordInput from "./InputField/PasswordInput";
import TextInputCom from "./InputField/TextInputCom";

const LoginFrom = ({ setSelected }) => {
  const [contactNo, setContactNo] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setSelected(1);
  };
  return (
    <div className="w-100 md:w-[30%]">
      <div className="flex justify-center">
        <h1 className="text-black1  font-semibold antialiased text-2xl mb-10">
          Welcome back!
        </h1>
      </div>
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <TextInputCom
          value={contactNo}
          setValue={setContactNo}
          id={"contactNo"}
          lable={"Whatsapp Number"}
          icon={FaWhatsapp}
        />
        <PasswordInput
          id={"password"}
          lable={"Password"}
          passowrd={password}
          setPassword={setPassword}
        />
        <Button
          fullSized
          className="mt-8"
          gradientDuoTone="primary"
          type="submit"
          size="sm"
        >
          Login
        </Button>
      </form>
      <div className="flex justify-center mt-5">
        <p
          className="text-black1 dark:text-white text-sm cursor-pointer"
          onClick={() => setSelected(1)}
        >
          Forget your password?
        </p>
      </div>
      <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />
      <div>
        <p className="mt-5 text-black1 dark:text-white text-sm text-center">
          Don't have an account?{" "}
          <span
            className="text-secondary cursor-pointer"
            onClick={() => {
              navigate("/reg");
              setSelected(0);
            }}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginFrom;
