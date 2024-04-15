import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "flowbite-react";
import { FaWhatsapp, FaRegUserCircle } from "react-icons/fa";
import TextInputCom from "./InputField/TextInputCom";
import PasswordInput from "./InputField/PasswordInput";

const RegistrationForm = ({ setSelected }) => {
  const regex = /^(?:0\d{9}|\+94\d{9})$/;
  const [name, setName] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState({
    contactNo: false,
    password: false,
  });
  const navigate = useNavigate();
  useEffect(() => {
      if (!regex.test(contactNo) && contactNo.length > 0 ) {
        setErr({ ...err, contactNo: true });
      } else {
        setErr({ ...err, contactNo: false });
      }
  }, [contactNo]);
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
          placeholder={"John Doe"}
        />
        <TextInputCom
          value={contactNo}
          setValue={setContactNo}
          id={"contactNo"}
          lable={"Whatsapp Number"}
          icon={FaWhatsapp}
          type={"number"}
          placeholder={"0712345678 or +94712345678"}
          inputErr={err.contactNo}
          helperText={err.contactNo ? "Invalid contact number" : ""}
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
