import "./App.css";
import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Login  from "./pages/User/Login";
import Registration from "./pages/User/Registation";
import Home from "./pages/User/Home";
import ProductPage from "./pages/User/Product";

import AdminLogin from "./pages/Admin/AdminLogin";
import AdminDashboard from "./pages/Admin/AdminDashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}></Suspense>
        <Routes >
          <Route path="/" element={<Login />} />
          <Route path="/reg" element={<Registration />} />
          <Route path="/user" element={<Home />} />
          <Route path="/product" element={<ProductPage />} />
        </Routes>
        <Routes>
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
