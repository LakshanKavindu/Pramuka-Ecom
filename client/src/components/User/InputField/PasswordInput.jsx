import { useState } from "react";
import { Label, TextInput, Flowbite } from "flowbite-react";
import { PiPassword } from "react-icons/pi";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import customTheme from "../../../assets/theme";

const PasswordInput = ({ passowrd, setPassword, id, lable }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
    document.getElementById(id).focus();
  };

  return (
    <Flowbite theme={{ theme: customTheme }}>
      <div className="max-w-md">
        <div className="mb-2 block">
          <Label htmlFor={id} value={lable} />
        </div>
        <div className="relative">
          <TextInput
            id={id}
            sizing={"sm"}
            type={showPassword ? "text" : "password"}
            icon={PiPassword}
            value={passowrd}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center pr-3 focus:outline-none"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
          </button>
        </div>
      </div>
    </Flowbite>
  );
};

export default PasswordInput;
