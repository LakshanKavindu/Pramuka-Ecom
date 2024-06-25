import { Button, Modal, Select } from "flowbite-react";
import { useEffect, useState } from "react";
import axiosClient from "../../utils/axiosClient";
import TextInputCom from "./InputField/TextInputCom";

const PlaceOrder = ({ openModal, setOpenModal, mycart, setIsOrdered }) => {
  const [defaultAddress, setDefaultAddress] = useState();
  const [billingAddress, setBillingAddress] = useState("");
  const [shippingMethod, setShippingMethod] = useState("DELIVERY_DEFAULT");
  useEffect(() => {
    axiosClient.get("/auth/user/profile").then((res) => {
      setDefaultAddress(res.data.defaultAddress);
    });
  }, []);

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    axiosClient
      .post("/auth/order", {
        orderProducts: mycart,
        address: billingAddress,
        shippingMethod: shippingMethod,
      })
      .then((res) => {
        setIsOrdered(true);
        setOpenModal(false);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });

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
            <div className="flex justify-center gap-4">
              <form className="w-lvw px-8" onSubmit={handlePlaceOrder}>
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
                <div className="flex flex-row gap-6 justify-end">
                  <Button className="mt-8" outline size="sm">
                    Cancel
                  </Button>
                  <Button
                    className="mt-8"
                    gradientDuoTone="primary"
                    type="submit"
                    size="sm"
                  >
                    Continue
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PlaceOrder;
