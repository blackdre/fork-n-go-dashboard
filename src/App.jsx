import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layouts/Layout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import AddProducts from "./pages/AddProducts";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/dashboard' element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path='orders' element={<Orders />} />
        <Route path='products' element={<Products />} />
        <Route path='addproducts' element={<AddProducts />} />
      </Route>
      {/* <Route path='*' element={<NotFoundPage />} /> */}
    </Routes>
  );
};

export default App;
