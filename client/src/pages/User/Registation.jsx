import { useState } from "react";
import OtpVerification from "../../components/User/OtpVerification";
import RegistrationForm from "../../components/User/RegistrationForm";

const Registration = () => {
  const [selected, setSelected] = useState(0);

  const components = [
    <RegistrationForm key="regForm" setSelected={setSelected}/>,
    <OtpVerification key="otpVerification"title={"Let's go!"} contactNo={'0712345678'} setSelected={setSelected}/>,
  ];
  return (
    <div className="flex items-center justify-center w-100 h-[90vh]">
      {components[selected]}
    </div>
  );
};

export default Registration;
