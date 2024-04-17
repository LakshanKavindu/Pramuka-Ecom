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
    name: false,
    contactNo: false,
  });
  const [passwordStrength, setPasswordStrength] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    if (!regex.test(contactNo) && contactNo.length > 0) {
      setErr({ ...err, contactNo: true });
    } else {
      setErr({ ...err, contactNo: false });
    }
  }, [contactNo]);
  useEffect(() => {
    if (name.length < 5 && name.length > 0) {
      setErr({ ...err, name: true });
    } else {
      setErr({ ...err, name: false });
    }
  }, [name]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!err.contactNo && !err.name && passwordStrength > 0) {
      setSelected(1);
    }
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
          size={"sm"}
          type={"text"}
          icon={FaRegUserCircle}
          placeholder={"John Doe"}
          inputErr={err.name}
          helperText={err.name ? "Name should be at least 5 characters" : ""}
        />
        <TextInputCom
          value={contactNo}
          setValue={setContactNo}
          id={"contactNo"}
          lable={"Whatsapp Number"}
          icon={FaWhatsapp}
          type={"text"}
          inputType={"tel"}
          size={"sm"}
          placeholder={"0712345678 or +94712345678"}
          inputErr={err.contactNo}
          helperText={err.contactNo ? "Invalid contact number" : ""}
        />
        <PasswordInput
          id={"password"}
          lable={"Password"}
          isIcon={true}
          size={"sm"}
          passowrd={password}
          setPassword={setPassword}
          passwordStrength={passwordStrength}
          setPasswordStrength={setPasswordStrength}
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
