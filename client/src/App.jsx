import "./App.css";
import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Login  from "./pages/User/Login";
import Registation from "./pages/User/Registation";
import Home from "./pages/User/Home";

import AdminLogin from "./pages/Admin/AdminLogin";
import AdminDashboard from "./pages/Admin/AdminDashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}></Suspense>
        <Routes >
          <Route path="/" element={<Login />} />
          <Route path="/registration" element={<Registation />} />
          <Route path="/user" element={<Home />} />
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
