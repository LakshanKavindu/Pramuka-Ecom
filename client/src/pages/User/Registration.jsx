import { useState } from "react";
import RegistrationForm from "../../components/User/RegistrationForm";
import OtpVerification from "../../components/User/OtpVerification";

const Registration = () => {
  const [selected, setSelected] = useState(0);
  const components = [
    <RegistrationForm setSelected={setSelected} key="registrationForm" />,
    <OtpVerification
      key="otpVerification"
      title={"Let's go!"}
      contactNo={"0712345678"}
      setSelected={setSelected}
    />,
  ];
  return (
    <div className=" flex justify-center items-center h-screen">
      {components[selected]}
    </div>
  );
};

export default Registration;
