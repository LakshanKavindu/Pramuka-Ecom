import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "flowbite-react";
import { FaWhatsapp,FaRegUserCircle  } from "react-icons/fa";
import TextInputCom from "./InputField/TextInputCom";
import PasswordInput from "./InputField/PasswordInput";

const RegistrationForm = ({setSelected}) => {
  const [name, setName] = useState("");
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
          Let's go!
        </h1>
      </div>
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <TextInputCom
          value={name}
          setValue={setName}
          id={"name"}
          lable={"Name"}
          icon={FaRegUserCircle}
        />
        <TextInputCom
          value={contactNo}
          setValue={setContactNo}
          id={"contactNo"}
          lable={"Whatsapp Number"}
          icon={FaWhatsapp}
        />
        <PasswordInput
          id={"password"}
          lable={"Choose Password"}
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
      <div>
        <p className="mt-5 text-black1 dark:text-white text-sm text-center">
          Don't have an account?{" "}
          <span
            className="text-secondary cursor-pointer"
            onClick={() => {
              navigate("/");
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

export default RegistrationForm;
