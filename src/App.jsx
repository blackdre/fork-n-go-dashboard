import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layouts/Layout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Orders from "./pages/Orders";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/dashboard' element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path='orders' element={<Orders />} />
      </Route>
    </Routes>
  );
};

export default App;
