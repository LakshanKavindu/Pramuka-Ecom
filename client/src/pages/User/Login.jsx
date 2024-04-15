import { useState } from "react";
import LoginFrom from "../../components/User/LoginFrom";

const Login = () => {
  const [selected, setSelected] = useState(0);
  const components = [
    <LoginFrom setSelected={setSelected} key="loginForm" />,
    <div key="loginText">Login</div>,
  ];
  return (
    <div className=" flex justify-center items-center h-screen">
      {components[selected]}
    </div>
  );
};

export default Login;
