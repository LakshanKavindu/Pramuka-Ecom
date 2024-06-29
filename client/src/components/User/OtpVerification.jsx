import { useState } from "react";
import { TextInput, Button } from "flowbite-react";
import { FaWhatsapp } from "react-icons/fa";

const OtpVerification = ({ title, contactNo, setSelected, page }) => {
  const regex = /^[0-9]+$/;
  const [otp, setOtp] = useState(["", "", "", ""]);
  const handleInputChange = (e, index) => {
    if (e.target.value.length === 1 && index < 3) {
      if (!regex.test(e.target.value)) return;
      const nextInput = document.getElementById(`input-${index + 1}`);
      nextInput.focus();
    }
    if (e.target.value.length === 0 && index > 0) {
      const prevInput = document.getElementById(`input-${index - 1}`);
      prevInput.focus();
    }
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpValue = otp.join("");
    console.log(otpValue);
    if (page === "login") setSelected(2);
    else setSelected(0);
  };
  return (
    <div className="w-100 md:w-[30%]">
      <div className="flex justify-center">
        <h1 className="text-black1  font-semibold antialiased text-2xl">
          {title ? title : "Let's go!"}
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center my-5">
        <FaWhatsapp size={70} className="text-green-500" />
      </div>
      <div className="text-left max-w-sm mx-auto">
        <p className="text-black1 dark:text-white text-xl ml-2">
          We just whatsapp you
        </p>
        <p className="text-black1 dark:text-white text-sm ml-2 mt-3">
          Please enter the code we whatsapp you
        </p>
        <p className="text-black1 dark:text-white text-sm ml-2 font-medium mt-2">
          {contactNo ? contactNo : "076 1234567"}
        </p>
        <p className="text-black1 dark:text-white text-sm ml-2 mt-3">
          Confirmation code{" "}
        </p>
      </div>
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <div className="flex flex-row items-center justify-between w-full mt-7 sm:mt-2">
          {[0, 1, 2, 3].map((index) => (
            <div className="w-16 h-16 m-1 " key={index}>
              <TextInput
                style={{ textAlign: "center", fontSize: "1.5rem" }}
                id={`input-${index}`}
                type="text"
                required
                sizing="lg"
                maxLength={1}
                value={otp[index]}
                onChange={(e) => handleInputChange(e, index)}
              />
            </div>
          ))}
        </div>
        <Button
          fullSized
          className="mt-8 sm:mt-2"
          gradientDuoTone="primary"
          type="submit"
          size="sm"
        >
          Verify
        </Button>
      </form>
      <div>
        <p className="mt-5 sm:mt-2 text-black1 dark:text-white text-sm text-center">
          Didn't get the code?{" "}
          <span className="text-secondary cursor-pointer">Resend</span>
        </p>
      </div>
    </div>
  );
};

export default OtpVerification;
