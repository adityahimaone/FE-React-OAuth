import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../pages/register";
import Login from "../pages/login";
import Home from "../pages/users/home";
import Dashboard from "../pages/admins/dashboard";

export default function RoutesPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="Dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
