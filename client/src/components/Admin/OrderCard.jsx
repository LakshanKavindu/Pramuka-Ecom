import React, { useState, useEffect, useRef } from "react";
import ViewOrderPopup from "./ViewOrderPopup";
import axiosClient from "../../utils/axiosClient";

export default function OrderCard({
  order,
  activeTab,
  pinnedOrders,
  setPinnedOrders,
  onPinOrder,
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleMarkAsDelivered = async (orderId) => {
    try {
      closeDropdown();
    } catch (error) {
      console.error("Error marking as delivered:", error);
    }
  };

  const handleMarkAsCanceled = async (orderId) => {
    try {
      closeDropdown();
    } catch (error) {
      console.error("Error marking as canceled:", error);
    }
  };

  const handlePinToTop = () => {
    onPinOrder(order.orderId);
    closeDropdown();
  };

  const orderDate = new Date(order.orderDate).toLocaleString();

  return (
    <div className={`relative ${pinnedOrders.includes(order.orderId) ? 'border-2 border-yellow-400' : ''}`}>
      <div className="p-4 shadow-md rounded-lg bg-white dark:bg-gray-800">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Order ID: {order.orderId}
            {pinnedOrders.includes(order.orderId) && (
              <span className="ml-2 text-yellow-400">📌 Pinned</span>
            )}
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
        <div className="flex flex-wrap justify-between items-center mb-2">
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
            orderDate={orderDate}
            totalPrice={order.totalPrice}
            activeTab={activeTab}
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
                  <button
                    onClick={handlePinToTop}
                    className={`w-full text-left px-4 py-2 text-sm ${
                      pinnedOrders.includes(order.orderId)
                        ? "text-gray-400 cursor-not-allowed"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                    disabled={pinnedOrders.includes(order.orderId)}
                  >
                    {pinnedOrders.includes(order.orderId)
                      ? "Pinned"
                      : "Pin to Top"}
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
