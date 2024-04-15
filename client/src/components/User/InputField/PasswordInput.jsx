import { useState } from "react";
import { Label, TextInput } from "flowbite-react";
import { PiPassword } from "react-icons/pi";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const PasswordInput = ({ passowrd, setPassword, id, lable, err, helperText }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
    document.getElementById(id).focus();
  };

  return (
    <div className="max-w-md mt-3">
      <div className="mb-2 block">
        <Label htmlFor={id} value={lable} />
      </div>
      <div className="relative">
        <TextInput
          style={{ paddingRight: "2.5rem" }}
          id={id}
          sizing={"sm"}
          type={showPassword ? "text" : "password"}
          icon={PiPassword}
          value={passowrd}
          onChange={(e) => setPassword(e.target.value)}
          required
          color={err ? "failure" : ""}
          helperText={helperText ? helperText : ""}
        />
        <button
          type="button"
          className="absolute top-3 sm:top-2 right-0 flex items-center pr-3 focus:outline-none"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
