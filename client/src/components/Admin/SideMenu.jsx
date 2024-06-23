import { Sidebar } from "flowbite-react";
import {
  HiChartPie,
  HiShoppingBag,
  HiUser,
  HiOutlineLogout,
  HiClipboardList,
} from "react-icons/hi";
import { useNavigate } from "react-router-dom";

export function SideMenu() {
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/");
  };
  return (
    <Sidebar
      aria-label="Sidebar with multi-level dropdown example"
      style={{ height: "100vh" }}
    >
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Collapse icon={HiShoppingBag} label="Products">
            <Sidebar.Item href="/admin/addproduct">Add Product</Sidebar.Item>
            <Sidebar.Item href="/admin/productdetails">
              Product Details
            </Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Item href="/admin/orders" icon={HiClipboardList}>
            Orders
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiOutlineLogout} onClick={handleLogout}>
            LogOut
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
