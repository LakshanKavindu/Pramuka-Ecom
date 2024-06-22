import { useState } from "react";
import { SideMenu } from "../../components/Admin/SideMenu";
import OrderCard from "../../components/Admin/OrderCard";

const AdminOrders = () => {
    const [activeTab, setActiveTab] = useState('pending');


    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="w-full flex flex-row overflow-hidden relative">
            <SideMenu />

            <div className="p-6 w-full h-screen flex flex-col">
                <div className="mb-3 h-12">
                    <p className="font-bold text-2xl">Orders</p>
                </div>
                
                <div className="flex flex-col w-full h-full">
                    <div className="sticky top-0 mb-4 text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 bg-white z-10">
                        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" role="tablist">
                            <li className="me-2" role="presentation">
                                <button
                                    className={`inline-block p-4 rounded-t-lg ${activeTab === 'pending' ? 'text-blue-600 border-b-2 border-blue-600 active' : 'hover:text-gray-600 hover:border-gray-400'}`}
                                    id="profile-tab"
                                    type="button"
                                    role="tab"
                                    aria-controls="profile"
                                    aria-selected={activeTab === 'pending'}
                                    onClick={() => handleTabClick('pending')}
                                >
                                    Pending Orders
                                </button>
                            </li>
                            <li className="me-2" role="presentation">
                                <button
                                    className={`inline-block p-4 rounded-t-lg ${activeTab === 'readyToPickup' ? 'text-blue-600 border-b-2 border-blue-600 active' : 'hover:text-gray-600 hover:border-gray-400'}`}
                                    id="dashboard-tab"
                                    type="button"
                                    role="tab"
                                    aria-controls="dashboard"
                                    aria-selected={activeTab === 'readyToPickup'}
                                    onClick={() => handleTabClick('readyToPickup')}
                                >
                                    Ready to Pickup
                                </button>
                            </li>
                            <li className="me-2" role="presentation">
                                <button
                                    className={`inline-block p-4 rounded-t-lg ${activeTab === 'completed' ? 'text-blue-600 border-b-2 border-blue-600 active' : 'hover:text-gray-600 hover:border-gray-400'}`}
                                    id="dashboard-tab"
                                    type="button"
                                    role="tab"
                                    aria-controls="dashboard"
                                    aria-selected={activeTab === 'completed'}
                                    onClick={() => handleTabClick('completed')}
                                >
                                    Completed Orders
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div id="default-tab-content" className="flex-grow overflow-y-auto mb-10">
                        {activeTab === 'pending' && (
                            <div className="p-4 rounded-lg m-3" id="profile" role="tabpanel" aria-labelledby="profile-tab">                                
                                    <OrderCard activeTab={activeTab}/>
                                    <OrderCard activeTab={activeTab}/>
                            </div>
                        )}
                        {activeTab === 'readyToPickup' && (
                            <div className="p-4 rounded-lg m-3" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                                <OrderCard activeTab={activeTab}/>
                                <OrderCard activeTab={activeTab}/>
                            </div>
                        )}
                        {activeTab === 'completed' && (
                            <div className="p-4 rounded-lg m-3" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                                <OrderCard activeTab={activeTab}/>
                                <OrderCard activeTab={activeTab}/>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminOrders;
