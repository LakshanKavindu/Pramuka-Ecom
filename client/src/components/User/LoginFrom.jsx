import { useState } from "react";
import PasswordInput from "./InputField/PasswordInput";

const LoginFrom = () => {
  const [password, setPassword] = useState("");
  return (
    <div className="w-[90%] sm:w-[40%] ">
      LoginFrom
      <PasswordInput
        id={"password"}
        lable={"Password"}
        passowrd={password}
        setPassword={setPassword}
      />
    </div>
  );
};

export default LoginFrom;
