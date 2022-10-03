import React from "react";
import {Routes,Route} from "react-router-dom"
import Home from "../Pages/Home"
import Login from "../Pages/Login"
import Cart from "../Pages/Cart"
import PrivateRoute from "./PrivateRoute"

const AllRoutes = () => {
  return (
  <div>
    <Routes>
      <Route path="/" element={<PrivateRoute><Home/></PrivateRoute>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/cart" element={<PrivateRoute><Cart/></PrivateRoute>}></Route>
    </Routes>
  </div>
  )
};

export default AllRoutes;
