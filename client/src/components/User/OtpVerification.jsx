import { useState } from "react";
const OtpVerification = ({ title, contactNo }) => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const handleInputChange = (e, index) => {
    if (e.target.value.length === 1 && index < 3) {
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
    console.log(newOtp);
  };

  return (
    <div className="sm:w-[50%] xs:w-100">
      <h1 className="text-black1 font-semibold antialiased text-2xl mb-3">
        {title ? title : "Let's go!"}
      </h1>
      <div className="flex flex-col justify-center items-center">
        <svg
          className="w-20 h-20 text-gray-800 dark:text-white font-thin"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.4"
            d="M16 10.5h.01m-4.01 0h.01M8 10.5h.01M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-6.6a1 1 0 0 0-.69.275l-2.866 2.723A.5.5 0 0 1 8 18.635V17a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
          />
        </svg>
      </div>
      <div className="text-left max-w-sm mx-auto">
        <p className="text-black1 dark:text-white text-xl ml-2">
          We just whatsapped you
        </p>
        <p className="text-black1 dark:text-white text-sm ml-2 mt-3">
          Please enter the code we whatsapped you
        </p>
        <p className="text-black1 dark:text-white text-sm ml-2 font-medium mt-2">{contactNo? contactNo : '076 1234567'}</p>
        <p className="text-black1 dark:text-white text-sm ml-2 mt-3">Confirmation code </p>
      </div>

      <form className="max-w-sm mx-auto">
        <div className="flex flex-row items-center justify-between w-full mt-7">
          {[0, 1, 2, 3].map((index) => (
            <div className="w-16 h-16 " key={index}>
              <input
                id={`input-${index}`}
                type="text"
                className="w-full h-full text-center text-2xl border border-gray-400 rounded-lg focus:ring-primary focus:border-primary dark:focus:ring-primary dark:focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
                maxLength={1}
                value={otp[index]}
                onChange={(e) => handleInputChange(e, index)}
              />
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="text-white mt-10 bg-gradient-to-r from-primary to-secondary focus:ring-4 focus:outline-none focus:ring-secondary font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-gradient-to-r from-primary to-secondary   dark:focus:ring-primary"
        >
          Verify
        </button>
      </form>
      <div>
        <p className="mt-5 text-black1 dark:text-white text-sm text-center">
          Didn't get the code?{" "}
          <span className="text-secondary cursor-pointer">Resend</span>
        </p>
      </div>
    </div>
  );
};

export default OtpVerification;
