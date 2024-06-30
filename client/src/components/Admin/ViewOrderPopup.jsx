import React, { useState } from "react";
import { Accordion } from "flowbite-react";

export default function ViewOrderPopup(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const {
    orderId,
    orderProducts,
    orderStatus,
    shippingMethod,
    deliverAddress,
    orderDate,
    totalPrice,
    activeTab,
    onMarkAsDelivered,
  } = props;


  return (
    <div>
      <button
        onClick={toggleModal}
        className="inline-flex items-center px-4 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-2"
        type="button"
      >
        View Order
      </button>

      {isModalOpen && (
        <div
          id="default-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full overflow-y-auto overflow-x-hidden bg-black bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-2xl max-height-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 flex flex-col h-full">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Order Details
                </h3>
                <button
                  type="button"
                  onClick={toggleModal}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div
                className="p-4 md:p-5 space-y-4 overflow-y-auto"
                style={{ maxHeight: "300px" }}
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                      User Name:
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">{props.customerName}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                      Order ID:
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {orderId}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                      Order Date:
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {new Date(orderDate).toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                      Total Price:
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Rs. {totalPrice}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                      Shipping Method:
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {shippingMethod}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                      Delivery Address:
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {deliverAddress || "N/A"}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                      Status:
                    </h4>
                    <p
                      className={`text-gray-600 dark:text-gray-400 ${
                        orderStatus === "PENDING"
                          ? "text-yellow-500"
                          : orderStatus === "SHIPPED"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {orderStatus}
                    </p>
                  </div>
                </div>
                <Accordion>
                  <Accordion.Panel>
                    <Accordion.Title>Products</Accordion.Title>
                    <Accordion.Content>
                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Product Image
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Product brand
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Product Name
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Quantity
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Price
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {orderProducts.map((orderProduct, index) => (
                              <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="flex-shrink-0 h-10 w-10">
                                    <img
                                      className="h-10 w-10 rounded-full"
                                      src={orderProduct.product.product.productImage}
                                      alt={orderProduct.product.product.productName}
                                    />
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="text-sm font-medium text-gray-900">
                                    {orderProduct.product.product.productBrand}
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="text-sm font-medium text-gray-900">
                                    {orderProduct.product.product.productName}
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {orderProduct.product.quantity}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  Rs. {orderProduct.product.product.productPrice}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </Accordion.Content>
                  </Accordion.Panel>
                </Accordion>
              </div>
              <div className="flex justify-end items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                {activeTab === "pending" && (
                  <button
                    onClick={() => {
                      props.onMarkAsDelivered(orderId);
                      toggleModal();
                    }}
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Mark As Delivered
                  </button>
                )}
                <button
                  onClick={toggleModal}
                  type="button"
                  className="py-2.5 px-5 ml-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
