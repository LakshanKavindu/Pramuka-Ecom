import { useState, useEffect } from "react";
import Footern from "../../components/User/Footer";
import Nav from "../../components/User/Navbar";
import { FaRegUser } from "react-icons/fa";
import { Button, Card, Label, TextInput } from "flowbite-react";
import { Modal } from "flowbite-react";
import { IoMdCloudDone } from "react-icons/io";
import axiosClient from "../../utils/axiosClient";

const Profile = () => {
  const [editDisabled, setEditDisabled] = useState(false);
  const [saveDisabled, setSaveDisabled] = useState(true);
  const [phoneDisabled, setPhoneDisabled] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  const [name, setName] = useState("Booshana namudhara");
  const [phone, setPhone] = useState("0771234567");
  const [tempPhone, setTempPhone] = useState("0771234567");

  useEffect(() => {
    axiosClient.get("/auth/user/profile").then((res) => {
      console.log(res.data);
      setName(res.data.name);
      setPhone(res.data.phoneNo);
      setTempPhone(res.data.phoneNo);
    });
  }, []);

  const handleEdit = () => {
    setPhoneDisabled(false);
    setSaveDisabled(false);
    setEditDisabled(true);
  };

  const handleSave = () => {
    axiosClient
      .post("/auth/user/updateContactNumber", {
        contactNo: phone,
      })
      .then(() => {
        setOpenModal(true);
        setPhoneDisabled(true);
        setSaveDisabled(true);
        setEditDisabled(false);
        setTempPhone(phone);
      })
      .catch(() => {});
  };

  const handleCancel = () => {
    setPhoneDisabled(true);
    setSaveDisabled(true);
    setEditDisabled(false);
    setPhone(tempPhone);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  return (
    <div>
      <Nav isActive={"profile"} />
      <div className="px-8 mt-8">
        <div className="mt-8 flex items-center mb-8">
          <FaRegUser className="text-2xl text-black2 mr-2" />
          <h2 className=" text-2xl font-semibold">Your Profile</h2>
        </div>
        <div className="flex items-center w-full justify-center">
          <Card className="max-w-xl w-full">
            <form className="flex flex-col gap-4">
              <div className="flex w-full items-center">
                <div className="mb-2 block w-1/5">
                  <Label htmlFor="email1" value="Name" />
                </div>
                <TextInput
                  className=" w-4/5"
                  id="email1"
                  type="text"
                  placeholder=""
                  required
                  disabled={true}
                  value={name}
                />
              </div>
              <div className="flex w-full items-center">
                <div className="mb-2 block w-1/5">
                  <Label htmlFor="phone1" value="PhoneNo" />
                </div>
                <TextInput
                  className=" w-4/5"
                  id="phone1"
                  type="text"
                  placeholder=""
                  required
                  disabled={phoneDisabled}
                  value={phone}
                  onChange={handlePhoneChange}
                />
              </div>
              <div className="flex items-center justify-end gap-2">
                {editDisabled === true ? (
                  <Button
                    type="button"
                    size="sm"
                    className=" border-primary text-primary hover:bg-primary hover:text-white"
                    onClick={handleCancel}
                  >
                    Cancel
                  </Button>
                ) : (
                  <Button
                    type="button"
                    size="sm"
                    className=" border-primary text-primary hover:bg-primary hover:text-white"
                    onClick={handleEdit}
                    disabled={editDisabled}
                  >
                    Edit
                  </Button>
                )}

                <Button
                  type="button"
                  size="sm"
                  className=" bg-primary"
                  disabled={saveDisabled}
                  onClick={handleSave}
                >
                  Save
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
      <Footern />
      {/* modal for save button */}
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <div className="flex justify-center items-center">
              <IoMdCloudDone className="text-5xl text-green-400 " />
            </div>
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Your have successfully updated your profile
            </h3>
            <div className="flex justify-center gap-4">
              {/* <Button color="failure" onClick={() => setOpenModal(false)}>
                {"Yes, I'm sure"}
              </Button> */}
              <Button
                gradientDuoTone={"primary"}
                onClick={() => setOpenModal(false)}
              >
                close
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Profile;
