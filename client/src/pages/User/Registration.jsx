import { useState } from "react";
import RegistrationForm from "../../components/User/RegistrationForm";

const Registration = () => {
  const [selected, setSelected] = useState(0);
  const components = [
    <RegistrationForm setSelected={setSelected} key="registrationForm" />,
    <div key="registrationText">Registration</div>,
  ];
  return (
    <div className=" flex justify-center items-center h-screen">
      {components[selected]}
    </div>
  );
};

export default Registration;
