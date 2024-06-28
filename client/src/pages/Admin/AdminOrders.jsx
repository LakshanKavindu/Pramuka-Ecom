import { useState, useEffect } from "react";
import { SideMenu } from "../../components/Admin/SideMenu";
import OrderCard from "../../components/Admin/OrderCard";
import axiosClient from "../../utils/axiosClient";

const AdminOrders = () => {
  const [activeTab, setActiveTab] = useState("pending");
  const [orders, setOrders] = useState([]);
  const [pinnedOrders, setPinnedOrders] = useState([]); // State to manage pinned orders

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axiosClient.get("auth/admin/adminorders");
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  const handlePinOrder = (orderId) => {
    if (!pinnedOrders.includes(orderId)) {
      if (pinnedOrders.length < 2) {
        setPinnedOrders([...pinnedOrders, orderId]);
      }
    } else {
      setPinnedOrders(pinnedOrders.filter((id) => id !== orderId));
    }
  };

  const filteredOrders = orders.filter((order) => {
    if (activeTab === "pending") {
      return order.orderStatus.toLowerCase() === "pending";
    } else if (activeTab === "completed") {
      return order.orderStatus.toLowerCase() === "shipped";
    }
    return true; // Show all orders if activeTab is neither 'pending' nor 'completed'
  });

  const sortedOrders = [...filteredOrders].sort((a, b) => {
    if (pinnedOrders.includes(a.orderId) && !pinnedOrders.includes(b.orderId)) {
      return -1;
    }
    if (!pinnedOrders.includes(a.orderId) && pinnedOrders.includes(b.orderId)) {
      return 1;
    }
    return 0;
  });

  return (
    <div className="w-full flex flex-row overflow-hidden relative">
      <SideMenu />

      <div className="p-6 w-full h-screen flex flex-col">
        <div className="mb-3 h-12">
          <p className="font-bold text-2xl">Orders</p>
        </div>
        <div className="flex flex-col w-full h-full">
          <div className="sticky top-0 mb-4 text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 bg-white z-10">
            <ul
              className="flex flex-wrap -mb-px text-sm font-medium text-center"
              id="default-tab"
              role="tablist"
            >
              <li className="me-2" role="presentation">
                <button
                  className={`inline-block p-4 rounded-t-lg ${
                    activeTab === "pending"
                      ? "text-blue-600 border-b-2 border-blue-600 active"
                      : "hover:text-gray-600 hover:border-gray-400"
                  }`}
                  id="profile-tab"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected={activeTab === "pending"}
                  onClick={() => handleTabClick("pending")}
                >
                  Pending Orders
                </button>
              </li>
              <li className="me-2" role="presentation">
                <button
                  className={`inline-block p-4 rounded-t-lg ${
                    activeTab === "completed"
                      ? "text-blue-600 border-b-2 border-blue-600 active"
                      : "hover:text-gray-600 hover:border-gray-400"
                  }`}
                  id="dashboard-tab"
                  type="button"
                  role="tab"
                  aria-controls="dashboard"
                  aria-selected={activeTab === "completed"}
                  onClick={() => handleTabClick("completed")}
                >
                  Completed Orders
                </button>
              </li>
            </ul>
          </div>
          <div
            id="default-tab-content"
            className="flex-grow overflow-y-auto mb-10"
          >
            {sortedOrders.map((order) => (
              <OrderCard
                key={order.orderId}
                order={order}
                activeTab={activeTab}
                pinnedOrders={pinnedOrders}
                setPinnedOrders={setPinnedOrders}
                onPinOrder={handlePinOrder}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOrders;
