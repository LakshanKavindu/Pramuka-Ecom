"use client";

import { Sidebar } from "flowbite-react";
import {
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiUser,
  HiOutlineLogout,
} from "react-icons/hi";

export function SideMenu() {
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
            <Sidebar.Item href="/productdetails">Product Details</Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Item href="#" icon={HiInbox}>
            Inbox
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiOutlineLogout}>
            LogOut
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
