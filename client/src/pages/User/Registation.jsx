import OtpVerification from "../../components/User/OtpVerification";
import RegistrationForm from "../../components/User/RegistrationForm";

const Registration = () => {
  return (
    <div className="flex items-center justify-center w-100 h-[90vh]">
      {/* <RegistrationForm /> */}
      <OtpVerification />
    </div>
  );
};

export default Registration;
