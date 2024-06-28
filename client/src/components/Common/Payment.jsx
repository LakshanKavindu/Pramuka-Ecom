import { useEffect, useState } from "react";
import axiosClient from "../../utils/axiosClient";

export const Payment = ({
  orderId,
  amount,
  currency,
  buttonText,
  setPaymentCompleted,
}) => {
  const [hash, setHash] = useState("");

  const fetchHash = async () => {
    const merchantId = import.meta.env.VITE_MERCHANT_ID;
    const values = { merchantId, orderId, amount, currency };
    try {
      const response = await axiosClient.post("/auth/payment/hash", {
        values,
      });
      setHash(response.data.hash);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchHash();
  }, []);

  const handlePayment = () => {
    payhere.onCompleted = function onCompleted(orderId) {
      console.log("Payment completed. OrderID:" + orderId);
      setPaymentCompleted(true);

      // Note: validate the payment and show success or failure page to the customer
    };

    // Payment window closed
    payhere.onDismissed = function onDismissed() {
      // Note: Prompt user to pay again or show an error page
      console.log("Payment dismissed");
    };

    // Error occurred
    payhere.onError = function onError(error) {
      // Note: show an error page
      console.log("Error:" + error);
    };

    var payment = {
      sandbox: true,
      merchant_id: "1227493", // Replace your Merchant ID
      return_url: undefined, // Important
      cancel_url: undefined, // Important
      notify_url: "http://sample.com/notify",
      order_id: orderId,
      items: "Door bell wireles",
      amount: amount,
      currency: currency,
      hash: hash, // *Replace with generated hash retrieved from backend
      first_name: "Saman",
      last_name: "Perera",
      email: "samanp@gmail.com",
      phone: "0771234567",
      address: "No.1, Galle Road",
      city: "Colombo",
      country: "Sri Lanka",
      delivery_address: "No. 46, Galle road, Kalutara South",
      delivery_city: "Kalutara",
      delivery_country: "Sri Lanka",
      custom_1: "",
      custom_2: "",
    };

    payhere.startPayment(payment);
  };

  return (
    <div>
      <button onClick={handlePayment}>{buttonText}</button>{" "}
    </div>
  );
};
