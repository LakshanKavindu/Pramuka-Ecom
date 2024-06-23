
import React, { useState } from "react";
import axios from 'axios';
import ViewOrderPopup from "./ViewOrderPopup";

export default function OrderCard({ order, activeTab, onStatusUpdate }) {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(prevState => !prevState);
    };

    const handleMarkAsDelivered = async () => {
        try {
            const response = await axios.put(`http://localhost:8080/api/admin/updateorder/${order.id}`, { status: 'SHIPPED' });
            console.log("status", response.status)
            if (response.status === 200) {
              console.log('Order status updated successfully:', response.data.order);
                onStatusUpdate(order.id, 'SHIPPED');
            }
        } catch (error) {
            console.error('Error updating order status:', error);
        }
    };

    const { user, product, quantity, status, shippingMethod, createdAt } = order;

    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative mb-5">
            <div className="absolute top-0 right-4">
                <div className="relative">
                    <button
                        id="dropdownButton"
                        className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                        onClick={toggleDropdown}
                        type="button"
                    >
                        <span className="sr-only">Open dropdown</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 16 3"
                        >
                            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                        </svg>
                    </button>
                    {isDropdownOpen && (
                        <div
                            id="dropdown"
                            className="absolute top-full right-0 z-10 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                        >
                            <ul className="py-2" aria-labelledby="dropdownButton">
                                <li>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                    >
                                        Export Data
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                    >
                                        Delete
                                    </a>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            <div className="flex items-center px-8 py-4">
                <img
                    className="w-14 h-14 rounded-full shadow-lg mr-20"
                    src={user.image}
                    alt={user.username}
                />
                <div>
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                        {user.username}
                    </h5>
                    <span className="text-sm text-gray-700 dark:text-gray-400">
                        {product.price}
                    </span>
                </div>
                <div className="items-center ml-20">
                    <h5 className="text-l font-medium text-gray-900 dark:text-white">
                        {shippingMethod}
                    </h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                        {new Date(createdAt).toLocaleDateString()}
                    </span>
                </div>
            </div>
            <div className="absolute bottom-4 right-4 flex">
                <ViewOrderPopup 
                    orderId={order.id}
                    username={user.username}
                    product={product}
                    quantity={quantity}
                    status={status} 
                    shippingMethod={shippingMethod}
                    createdAt={createdAt}
                />
                {activeTab === 'pending' && (
                    <button
                        onClick={handleMarkAsDelivered}
                        className="inline-flex items-center px-4 py-2 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                        Mark As Delivered
                    </button>
                )}
            </div>
        </div>
    );

}
