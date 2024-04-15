import { useState, useRef } from "react";
import { Label, TextInput, Popover } from "flowbite-react";
import { PiPassword } from "react-icons/pi";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { FaRegCircleCheck, FaRegCircleXmark } from "react-icons/fa6";

const PasswordInput = ({
  passowrd,
  setPassword,
  id,
  lable,
  err,
  helperText,
  passwordStrength,
  setPasswordStrength,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordInclude, setPasswordInclude] = useState({
    upperCase: false,
    lowerCase: false,
    symbol: false,
    length: false,
  });
  const ref = useRef(null);
  const strength = ["Fair", "Good", "Strong", "VeryStrong"];
  const strengthBar = [
    <div className="h-1 bg-red-500 dark:bg-red-200" key="Fair"></div>,
    <div className="h-1 bg-yellow-500 dark:bg-yellow-200" key="Good"></div>,
    <div className="h-1 bg-blue-500 dark:bg-blue-200" key="Strong"></div>,
    <div className="h-1 bg-green-500 dark:bg-green-200" key="VeryStrong"></div>,
  ];
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
    document.getElementById(id).focus();
  };

  const handlePasswordIncluded = (password) => {
    const upperCase = /[A-Z]/g;
    const lowerCase = /[a-z]/g;
    const symbols = /[@#$&*]+/;
    const length = password.length >= 12;
    setPasswordInclude({
      upperCase: upperCase.test(password),
      lowerCase: lowerCase.test(password),
      symbol: symbols.test(password),
      length: length,
    });
  };

  const calculatePasswordStrength = (password) => {
    let score = 0;
    if (password.length < 8) return 0;
    score += Math.min(12, password.length - 3);
    if (password.length > 12) score = 14;
    if (/[a-z]/.test(password)) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/\d/.test(password)) score += 1;
    if (/[!@#$%^&*()_+{}[\]:;<>,.?/~\\-]/.test(password)) score += 3;
    if (!password.match(/password/i)) score += 1;
    if (!/(.)\1{2,}/.test(password)) score += 2;
    const strength = Math.min(4, Math.floor(score / 5));
    return strength;
  };

  const handlePassword = (password) => {
    setPassword(password);
    handlePasswordIncluded(password);
    setPasswordStrength(calculatePasswordStrength(password));
  };

  return (
    <div className="max-w-md mt-3">
      <div className="mb-2 block">
        <Label htmlFor={id} value={lable} />
      </div>
      <div className="relative">
        <Popover
          trigger={id === "password" ? "click" : "focus"}
          content={
            <div className="space-y-2 p-3 ">
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Must have at least 8 characters {passwordStrength}
              </h3>
              <div className="grid grid-cols-4 gap-2">
                {strengthBar.map((bar, i) =>
                  i < passwordStrength ? (
                    bar
                  ) : (
                    <div
                      className="h-1 bg-gray-200 dark:bg-gray-200"
                      key={i}
                    ></div>
                  )
                )}
              </div>
              <p>It’s better to have:</p>
              <ul>
                <li className="mb-1 flex items-center">
                  {passwordInclude.lowerCase && passwordInclude.upperCase ? (
                    <FaRegCircleCheck color="green" />
                  ) : (
                    <FaRegCircleXmark color="red" />
                  )}
                  <span className="ml-2">
                    An uppercase and lowercase letter
                  </span>
                </li>
                <li className="mb-1 flex items-center">
                  {passwordInclude.symbol ? (
                    <FaRegCircleCheck color="green" />
                  ) : (
                    <FaRegCircleXmark color="red" />
                  )}
                  <span className="ml-2">A symbol (@#$&*)</span>
                </li>
                <li className="flex items-center">
                  {passwordInclude.length ? (
                    <FaRegCircleCheck color="green" />
                  ) : (
                    <FaRegCircleXmark color="red" />
                  )}
                  <span className="ml-2">At least 12 characters</span>
                </li>
              </ul>
            </div>
          }
        >
          <TextInput
            ref={ref}
            style={{ paddingRight: "2.5rem" }}
            id={id}
            sizing={"sm"}
            type={showPassword ? "text" : "password"}
            icon={PiPassword}
            value={passowrd}
            onChange={(e) => handlePassword(e.target.value)}
            required
            color={err ? "failure" : ""}
            helperText={
              helperText
                ? helperText
                : id === "password" && passwordStrength > 0
                ? `${strength[passwordStrength - 1]} password`
                : ""
            }
          />
        </Popover>
        <button
          ref={ref}
          type="button"
          className="absolute top-3 sm:top-2 right-0 flex items-center pr-3 focus:outline-none"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
