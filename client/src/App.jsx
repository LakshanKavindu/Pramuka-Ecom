import "./App.css";
import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Flowbite } from "flowbite-react";
import Login from "./pages/User/Login";
import Registration from "./pages/User/Registration";
import Home from "./pages/User/Home";
import ProductPage from "./pages/User/Product";
import Profile from "./pages/User/Profile";

import AdminLogin from "./pages/Admin/AdminLogin";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import customTheme from "./assets/theme";

function App() {
  return (
    <>
      <Flowbite theme={{ theme: customTheme }}>
        <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}></Suspense>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/reg" element={<Registration />} />
            <Route path="/user" element={<Home />} />
            <Route path="/user/profile" element={<Profile />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Routes>
        </BrowserRouter>
      </Flowbite>
    </>
  );
}

export default App;
