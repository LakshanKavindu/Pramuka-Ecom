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

export const PrivateRoute = ({ allowedRole }) => {
  return sessionStorage.getItem("isLoggin") === "true" &&
    sessionStorage.getItem("role") === allowedRole ? (
    <Outlet />
  ) : (
    <Navigate to="/" />
  );
};

function App() {
  return (
    <>
      <Flowbite theme={{ theme: customTheme }}>
        <GoogleOAuthProvider clientId="84109881920-sn28qu39ep0k12tl8qhkhbml7308rbhq.apps.googleusercontent.com">
          <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}></Suspense>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product" element={<ProductPage />} />
              <Route path="/preview" element={<ProductPreview />} />
              <Route element={<PrivateRoute allowedRole="USER" />}>
                <Route path="/user/profile" element={<Profile />} />
                <Route path="/cart" element={<Cart />} />
              </Route>
              <Route path="/admin" element={<AdminLogin />} />
              <Route element={<PrivateRoute allowedRole="ADMIN" />}>
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/admin/addproduct" element={<AdminAddProduct />} />
                <Route
                  path="/admin/productdetails"
                  element={<AdminProductDetails />}
                />
              </Route>
            </Routes>
          </BrowserRouter>
        </GoogleOAuthProvider>
      </Flowbite>
    </>
  );
}

export default App;
