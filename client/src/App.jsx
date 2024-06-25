import "./App.css";
import { Suspense } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import { Flowbite } from "flowbite-react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Home from "./pages/User/Home";
import ProductPage from "./pages/User/Product";
import Profile from "./pages/User/Profile";
import Cart from "./pages/User/Cart";
import AdminLogin from "./pages/Admin/AdminLogin";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import customTheme from "./assets/theme";
import ProductPreview from "./pages/User/ProductPreview";
import AdminAddProduct from "./pages/Admin/AdminAddProduct";
import AdminProductDetails from "./pages/Admin/AdminProductDetails";
import AdminOrders from "./pages/Admin/AdminOrders";
import { LogedProvider } from "./context/LogedContext";

export const PrivateRoute = ({ allowedRole }) => {
  const isLoggedin = sessionStorage.getItem("isLoggin") === "true";
  const role = sessionStorage.getItem("role");

  return isLoggedin && allowedRole.includes(role) ? (
    <Outlet />
  ) : (
    <Navigate to="/" />
  );
};

function App() {
  return (
    <>
      <Flowbite theme={{ theme: customTheme }}>
        <LogedProvider>
        <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}>
          <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}></Suspense>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product" element={<ProductPage />} />
              <Route path="/preview/:productid" element={<ProductPreview />} />
              <Route element={<PrivateRoute allowedRole={["USER", "ADMIN"]} />}>
                <Route path="/user/profile" element={<Profile />} />
                <Route path="/cart" element={<Cart />} />
              </Route>
              <Route path="/admin" element={<AdminLogin />} />
              <Route element={<PrivateRoute allowedRole={["ADMIN"]} />}>
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/admin/addproduct" element={<AdminAddProduct />} />
                <Route
                  path="/admin/productdetails"
                  element={<AdminProductDetails />}
                />
                <Route path="/admin/orders" element={<AdminOrders />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </GoogleOAuthProvider>
        </LogedProvider>
      </Flowbite>
    </>
  );
}

export default App;
