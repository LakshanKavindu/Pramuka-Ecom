import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import ViewOrderPopup from "./ViewOrderPopup";
import axiosClient from "../../utils/axiosClient";

export default function OrderCard({
  order,
  activeTab,
  onStatusUpdate,
  onPinToTop,
  isPinned,
  disablePin,
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMarkAsDelivered = async (orderId) => {
    try {
      const response = await axios.post(
        `http://localhost:8080/api/order/orderStatus/${orderId}`,
        {
          status: "SHIPPED",
        }
      );
      onStatusUpdate(orderId, "SHIPPED");
      closeDropdown();
    } catch (error) {
      console.error("Error marking as delivered:", error);
    }
  };

  const handleMarkAsCanceled = async (orderId) => {
    try {
      const response = await axios.post(
        `http://localhost:8080/api/order/orderStatus/${orderId}`,
        {
          status: "CANCELLED",
        }
      );
      onStatusUpdate(orderId, "CANCELLED");
      closeDropdown();
    } catch (error) {
      console.error("Error marking as canceled:", error);
    }
  };

  const handlePinToTop = async (orderId) => {
    try {
      const response = await axios.post(
        `http://localhost:8080/api/order/pinOrder/${orderId}`
      );
      onPinToTop(orderId);
      closeDropdown();
    } catch (error) {
      console.error("Error pinning order:", error);
    }
  };

  const orderDate = new Date(order.orderDate).toLocaleString();
  const products = order.orderProducts
    .map((orderProduct) => orderProduct.product.product.productName)
    .join(", ");

  return (
    <div
      className={`relative ${
        isPinned ? "bg-yellow-100 border-yellow-500 border-2" : ""
      }`}
    >
      <div className="p-4 shadow-md rounded-lg bg-white dark:bg-gray-800">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Order ID: {order.orderId}
          </h2>
          <button
            ref={dropdownRef}
            onClick={toggleDropdown}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6h.01M12 12h.01M12 18h.01"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-wrap justify-between items-center mb-2 max-w-100 overflow-hidden">
          <p className="text-gray-600 dark:text-gray-400 mr-4">
            Customer: {order.orderProducts[0].product.user.username}
          </p>
          <p className="text-gray-600 dark:text-gray-400 mr-4">
            Order Date: {orderDate}
          </p>
          <p className="text-gray-600 dark:text-gray-400 mr-4">
            Total Price: Rs. {order.totalPrice}
          </p>
          <ViewOrderPopup
            orderId={order.orderId}
            customerName={order.orderProducts[0].product.user.username}
            orderProducts={order.orderProducts}
            orderStatus={order.orderStatus}
            shippingMethod={order.shippingMethod}
            deliverAddress={order.deliverAddress}
            orderDate={order.orderDate}
            totalPrice={order.totalPrice}
            activeTab={activeTab}
            onMarkAsDelivered={handleMarkAsDelivered}
          />
          {isDropdownOpen && (
            <div className="absolute right-0 top-8 bg-white border border-gray-200 rounded-lg shadow-lg w-48 z-10">
              {activeTab === "pending" && (
                <>
                  <button
                    onClick={() => handleMarkAsDelivered(order.orderId)}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Mark as Delivered
                  </button>
                  <button
                    onClick={() => handleMarkAsCanceled(order.orderId)}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Mark as Cancelled
                  </button>
                  {!disablePin && (
                    <button
                      onClick={() => handlePinToTop(order.orderId)}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {isPinned ? "Unpin" : "Pin to Top"}
                    </button>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
