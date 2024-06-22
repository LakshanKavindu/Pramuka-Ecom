import { useState, useEffect } from "react";
import { Modal, Button } from "flowbite-react";
import TextInputCom from "./InputField/TextInputCom";
import { FaWhatsapp } from "react-icons/fa";
import axiosClient from "../../utils/axiosClient";

const RegistrationPopup = ({ openModal, setOpenModal }) => {
  const regex = /^(?:0\d{9}|\+94\d{9})$/;
  const [contactNo, setContactNo] = useState("");
  const [err, setErr] = useState(false);
  useEffect(() => {
    if (!regex.test(contactNo) && contactNo.length > 0) {
      setErr(true);
    } else {
      setErr(false);
    }
  }, [contactNo]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!err) {
      axiosClient
        .post("/auth/user/updateContactNumber", {
          contactNo: contactNo,
        })
        .then(() => {
          sessionStorage.removeItem("isUpdateContact");
          setOpenModal(false);
        });
    }
  };
  return (
    <Modal show={openModal} size="md" popup>
      {/* <Modal.Header /> */}
      <Modal.Body>
        <div className="text-center">
          <h3 className="mt-5 text-lg  font-semibold text-gray-700 ">
            Let's go!
          </h3>
          <h5 className="mb-5 text-sm font-normal text-gray-500 ">
            Enter your details to continue
          </h5>
          <div className="flex justify-center gap-4">
            <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
              <TextInputCom
                value={contactNo}
                setValue={setContactNo}
                id={"contactNo"}
                lable={"Mobile Number"}
                icon={FaWhatsapp}
                type={"text"}
                inputType={"tel"}
                size={"md"}
                placeholder={"0712345678 or +94712345678"}
                inputErr={err}
                helperText={err ? "Invalid contact number" : ""}
              />
              <Button
                fullSized
                className="mt-8"
                gradientDuoTone="primary"
                type="submit"
                size="sm"
              >
                Continue
              </Button>
            </form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default RegistrationPopup;
