import { useState } from "react";
import LoginFrom from "../../components/User/LoginFrom";
import OtpVerification from "../../components/User/OtpVerification";
import ChangePassword from "../../components/User/ChangePassword";

const Login = () => {
  const [selected, setSelected] = useState(0);

  const components = [
    <LoginFrom key="loginForm" setSelected={setSelected}/>,
    <OtpVerification key="otpVerification" title={"Forget Your Password"} contactNo={"07123456789"} setSelected={setSelected} page={"login"}/>,
    <ChangePassword key="changePassowrd" setSelected={setSelected} />
  ];

  return (
    <div className="flex items-center justify-center w-100 h-[90vh]">
      {components[selected]}
    </div>
  );
};

export default Login;
