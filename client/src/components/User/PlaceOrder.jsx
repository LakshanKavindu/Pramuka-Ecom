import { Button, Modal, Select } from "flowbite-react";
import { useEffect, useState } from "react";
import axiosClient from "../../utils/axiosClient";
import toast from "react-hot-toast";
import CustomeToastBar from "../Common/CustomeToastBar";
import TextInputCom from "./InputField/TextInputCom";
import { Payment } from "../Common/Payment";

const PlaceOrder = ({
  openModal,
  setOpenModal,
  mycart,
  setIsOrdered,
  cartTotal,
}) => {
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const [defaultAddress, setDefaultAddress] = useState();
  const [billingAddress, setBillingAddress] = useState("");
  const [shippingMethod, setShippingMethod] = useState("DELIVERY_DEFAULT");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    axiosClient.get("/auth/user/profile").then((res) => {
      setDefaultAddress(res.data.defaultAddress);
    });

    const user = JSON.parse(sessionStorage.getItem("user"));
    setFirstName(user.userName.split(" ")[0]);
    setLastName(user.userName.split(" ")[1]);
    setEmail(user.email);
  }, []);

  console.log("my cart variable", mycart);

  useEffect(() => {
    if (paymentCompleted) {
      setIsOrdered(true);
      setOpenModal(false);
      handlePlaceOrder();
    }
  }, [paymentCompleted]);

  const handlePlaceOrder = () => {
    toast.promise(
      axiosClient
        .post("/auth/order", {
          orderProducts: mycart,
          address: billingAddress,
          shippingMethod: shippingMethod,
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((e) => {
          console.log(e);
        }),
      {
        loading: "Placing order...",
        error: "Error placing order.",
        success: "Order placed!",
      }
    );

    console.log("handle order");
  };
  return (
    <>
      <Modal show={openModal} size="md" popup>
        <Modal.Body>
          <div className="text-center">
            <h3 className="mt-5 text-lg  font-semibold text-gray-700 ">
              Let's go!
            </h3>
            <h5 className="mb-5 text-sm font-normal text-gray-500 ">
              select your address and place your order
            </h5>
            <div className="flex flex-col justify-center gap-4 ">
              <form className=" px-8">
                <Select
                  value={shippingMethod}
                  onChange={(e) => setShippingMethod(e.target.value)}
                >
                  <option value="DELIVERY_DEFAULT">Default Address</option>
                  <option value="DELIVERY_BILLING">Billing Address</option>
                  <option value="PICKUP">Pickup in Store</option>
                </Select>
                {shippingMethod !== "PICKUP" && (
                  <TextInputCom
                    value={
                      shippingMethod === "DELIVERY_DEFAULT"
                        ? defaultAddress
                        : billingAddress
                    }
                    setValue={
                      shippingMethod === "DELIVERY_DEFAULT"
                        ? setDefaultAddress
                        : setBillingAddress
                    }
                    id={"address"}
                    lable={"Address"}
                    icon={""}
                    type={"text"}
                    inputType={""}
                    size={"md"}
                    placeholder={"Enter your address"}
                    inputErr={false}
                    helperText={""}
                    disabled={
                      shippingMethod === "DELIVERY_DEFAULT" ? true : false
                    }
                  />
                )}
              </form>
              <div className="flex flex-row gap-6 justify-end">
                <Button
                  className="mt-8"
                  outline
                  size="sm"
                  onClick={() => setOpenModal(false)}
                >
                  Cancel
                </Button>
                <Button
                  className="mt-8"
                  gradientDuoTone="primary"
                  type="submit"
                  size="sm"
                >
                  <Payment
                    buttonText="Pay Now"
                    orderId="order1"
                    currency="LKR"
                    firstName={firstName}
                    lastName={lastName}
                    email={email}
                    address={billingAddress ? billingAddress : defaultAddress}
                    cartTotal={cartTotal}
                    setPaymentCompleted={setPaymentCompleted}
                  />
                </Button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <CustomeToastBar />
    </>
  );
};

export default PlaceOrder;
