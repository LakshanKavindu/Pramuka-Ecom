import { Toaster } from "react-hot-toast";
const CustomeToastBar = () => {
  // if (type === "sucess") {
  //   toast.success(message);
  // } else if (type === "error") {
  //   toast.error(message);
  // } else if (type === "warning") {
  //   toast.custom(message, {
  //     icon: "⚠️",
  //   });
  // }
  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={8}
      containerClassName=""
      containerStyle={{}}
      toastOptions={{
        // Define default options
        className: "",
        duration: 5000,
      }}
    />
  );
};

export default CustomeToastBar;
