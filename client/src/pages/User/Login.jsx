import { useState } from "react";
import LoginFrom from "../../components/User/LoginFrom";
import OtpVerification from "../../components/User/OtpVerification";
import ChangePassword from "../../components/User/ChangePassword";

const Login = () => {
  const [selected, setSelected] = useState(0);
  const components = [
    <LoginFrom setSelected={setSelected} key="loginForm" />,
    <OtpVerification
      key="otpVerification"
      title={"Forget Your Password"}
      contactNo={"07123456789"}
      setSelected={setSelected}
      page={"login"}
    />,
    <ChangePassword setSelected={setSelected} key="changePassword" />,
  ];
  return (
    <div className=" flex justify-center items-center h-screen">
      {components[selected]}
    </div>
  );
};

export default Login;
