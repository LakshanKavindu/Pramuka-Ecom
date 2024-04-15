import { useState } from "react";
import PassowrdInput from "./inputField/withIcon/PassowrdInput";

const ChangePassword = ({ setSelected }) => {
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSelected(0);
  };
  return (
    <div className="  sm:w-[50%] xs:w-100  ">
      <h1 className="text-black1 font-semibold antialiased text-2xl mb-10">
        Set a New Password
      </h1>
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <PassowrdInput
          lable="Password"
          password={password}
          setPassword={setPassword}
        />
        <PassowrdInput
          lable="Confirm Password"
          password={confirmationPassword}
          setPassword={setConfirmationPassword}
          id={"confirmPassword"}
        />
        <button
          type="submit"
          className="text-white mt-10 bg-gradient-to-r from-primary to-secondary focus:ring-4 focus:outline-none focus:ring-secondary font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-gradient-to-r from-primary to-secondary   dark:focus:ring-primary"
        >
          Save and Continue
        </button>
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
