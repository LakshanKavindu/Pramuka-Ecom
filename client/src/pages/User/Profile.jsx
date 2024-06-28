import { useState, useEffect } from "react";
import Footern from "../../components/User/Footer";
import Nav from "../../components/User/Navbar";
import { FaRegUser } from "react-icons/fa";
import { Button, Card, Label, TextInput, Accordion } from "flowbite-react";
import { BiPurchaseTagAlt } from "react-icons/bi";
import toast from "react-hot-toast";
import CustomeToastBar from "../../components/Common/CustomeToastBar";
import axiosClient from "../../utils/axiosClient";
import Order from "../../components/User/Order";

const Profile = () => {
  const [editDisabled, setEditDisabled] = useState(false);
  const [saveDisabled, setSaveDisabled] = useState(true);
  const [phoneDisabled, setPhoneDisabled] = useState(true);
  const [name, setName] = useState("Booshana namudhara");
  const [phone, setPhone] = useState("0771234567");
  const [tempPhone, setTempPhone] = useState("0771234567");
  const [address, setAddress] = useState("");
  const [tempAddress, setTempAddress] = useState("");
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    axiosClient.get("/auth/user/profile").then((res) => {
      console.log(res.data);
      setName(res.data.name);
      setPhone(res.data.phoneNo);
      setTempPhone(res.data.phoneNo);
      setAddress(res.data.defaultAddress);
      setTempAddress(res.data.defaultAddress);
    });
    axiosClient.get("/auth/order").then((res) => {
      setMyOrders(res.data);
      console.log(res.data);
    });
  }, []);

  const handleEdit = () => {
    setPhoneDisabled(false);
    setEditDisabled(true);
  };
  const regex = /^(?:0\d{9}|\+94\d{9})$/;
  useEffect(() => {
    if (
      address.length > 0 &&
      phone.length > 0 &&
      regex.test(phone) &&
      (address !== tempAddress || phone !== tempPhone)
    ) {
      setSaveDisabled(false);
    } else {
      setSaveDisabled(true);
    }
  }, [address, phone, tempAddress, tempPhone]);

  const handleSave = () => {
    toast.promise(
      axiosClient
        .post("/auth/user/updateContactNumber", {
          contactNo: phone,
          address: tempAddress,
        })
        .then(() => {
          setPhoneDisabled(true);
          setSaveDisabled(true);
          setEditDisabled(false);
          setTempPhone(phone);
          setTempAddress(address);
        })
        .catch(() => {}),
      {
        loading: "Updating profile...",
        error: "Error updating profile.",
        success: "Profile updated!",
      }
    );
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

      <div className="px-2 sm:px-8 py-10 mt-10 flex flex-col md:flex-row gap-10 justify-center items-center md:items-start">
        <Card className="max-w-xl w-full h-[55vh] flex flex-col">
          <div className="mt-8 flex items-center mb-8">
            <FaRegUser className="text-2xl text-black2 mr-2" />
            <h2 className=" text-2xl font-semibold">Your Profile</h2>
          </div>
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
                color={"primary"}
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
                color={!regex.test(phone) ? "failure" : "primary"}
                disabled={phoneDisabled}
                value={phone}
                onChange={handlePhoneChange}
              />
            </div>
            <div className="flex w-full items-center">
              <div className="mb-2 block w-1/5">
                <Label htmlFor="address" value="Address" />
              </div>
              <TextInput
                className=" w-4/5"
                id="address"
                type="text"
                placeholder=""
                required
                color={"primary"}
                disabled={phoneDisabled}
                value={tempAddress}
                onChange={(e) => setTempAddress(e.target.value)}
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
        <Card className="max-w-3xl  w-full flex flex-col">
          <div className="mt-8 flex items-center mb-8">
            <BiPurchaseTagAlt className="text-2xl text-black2 mr-2" />
            <h2 className=" text-2xl font-semibold">Your Orders</h2>
          </div>
          {myOrders && myOrders.length > 0 ? (
            <Accordion className="sm:h-[60vh]  overflow-y-auto">
              {myOrders.map((order) => (
                <Accordion.Panel key={order.orderId}>
                  <Accordion.Title>
                    <div className="flex flex-col md:flex-row justify-center items-start md:items-center text-sm">
                      <div className="flex flex-row">
                        Order ID :
                        <span className="font-bold">{order.orderId}</span>
                      </div>
                      <p
                        className={`${
                          order.orderStatus === "PENDING"
                            ? "bg-red-300"
                            : "bg-[#A6FF96]"
                        } md:mx-5 p-1 rounded-lg text-black`}
                      >
                        {order.orderStatus}
                      </p>
                    </div>
                  </Accordion.Title>
                  <Accordion.Content>
                    <div className="flex flex-col">
                      <div className="flex flex-row justify-between">
                        <div className="flex flex-col sm:flex-row md:flex-col">
                          Deliver Address :
                          <span className="font-bold flex flex-col">
                            {order.deliverAddress
                              .split(",")
                              .map((line, idx) => (
                                <p key={idx}>
                                  {line}
                                  {idx !==
                                  order.deliverAddress.split(",").length - 1
                                    ? ","
                                    : ""}
                                </p>
                              ))}
                          </span>
                        </div>
                        <div className="flex flex-col md:flex-row ">
                          Order Date :
                          <span className="font-semibold">
                            {order.orderDate.split("T")[0]}
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <p className="font-semibold my-2">
                          Total Price : LKR{" "}
                          <span className="text-xl">{order.totalPrice}</span>
                        </p>
                      </div>
                      <hr className="h-px my-5 bg-gray-400 border-0 dark:bg-gray-700"></hr>
                      <div className="flex flex-row gap-3 font-semibold">
                        <p className="w-1/6"></p>
                        <p className="w-1/2 pl-6">name</p>
                        <p className="w-1/6">qty.</p>
                        <p className="w-1/6">price</p>
                      </div>
                      {order.orderProducts &&
                        order.orderProducts.map((product) => (
                          <Order
                            img={product.product.product.productImage}
                            name={product.product.product.productName}
                            quantity={product.product.quantity}
                            price={product.product.product.productPrice}
                            key={product.product.id}
                          />
                        ))}
                    </div>
                  </Accordion.Content>
                </Accordion.Panel>
              ))}
            </Accordion>
          ) : (
            <div>
              <h3 className="text-center text-lg font-normal text-gray-500 dark:text-gray-400">
                No Orders Found
              </h3>
            </div>
          )}
        </Card>
      </div>
      <Footern />

      <CustomeToastBar />
    </div>
  );
};

export default Profile;
