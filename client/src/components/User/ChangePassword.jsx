import { useState, useEffect } from "react";
import { Button } from "flowbite-react";
import PasswordInput from "./InputField/PasswordInput";

const ChangePassword = ({ setSelected }) => {
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");
  const [err, setErr] = useState({
    password: false,
    confirmationPassword: false,
  });
  useEffect(() => {
    if (confirmationPassword.length > 0 && password !== confirmationPassword) {
      setErr({ ...err, confirmationPassword: true });
    }else{
      setErr({ ...err, confirmationPassword: false });
    }

  }, [password, confirmationPassword]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!err.confirmationPassword) {
      setSelected(0);
      return;
    }
  };234
  return (
    <div className="w-100 md:w-[30%]">
      <div className="flex justify-center">
        <h1 className="text-black1  font-semibold antialiased text-2xl mb-10">
          Forget Your Password
        </h1>
      </div>
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <PasswordInput
          id={"password"}
          lable={"Password"}
          passowrd={password}
          setPassword={setPassword}
        />
        <PasswordInput
          id={"confirmPassword"}
          lable="Confirm Password"
          password={confirmationPassword}
          setPassword={setConfirmationPassword}
          err={err.confirmationPassword}
          helperText={
            err.confirmationPassword ? "Password does not match" : ""
          }
        />
        <Button
          fullSized
          className="mt-8"
          gradientDuoTone="primary"
          type="submit"
          size="sm"
        >
          Save and Continue
        </Button>
      </form>
      <div>
        <p className="mt-5 text-black1 dark:text-white text-sm text-center">
          Remember your password?{" "}
          <span
            className="text-secondary cursor-pointer"
            onClick={() => setSelected(0)}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default ChangePassword;
