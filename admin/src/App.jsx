import { useState } from "react";
import { BrowserRouter, Outlet, Route, Router, Routes } from "react-router-dom";
import DashboardAdmin from "./component/DashbordAdmin";
import Register from "../src/Pages/Register";
import Login from "../src/Pages/Login";
import SidBar from "./component/comman/SideBar";
import Products from "./component/Products";
import Orders from "./component/Orders";
import Settings from "./component/Settings";
import Users from "./component/Users";
import Navbar from "./component/comman/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <div>
              <Navbar />
              <div className="flex  ">
                <SidBar />
                <Outlet />
              </div>
            </div>
          }
        >
          <Route path="" element={<DashboardAdmin />} />
          <Route
            path="products"
            element={
              <div className=" w-full ">
                <Products />
              </div>
            }
          />
          <Route
            path="orders"
            element={
              <div className=" w-full ">
                <Orders />
              </div>
            }
          />
          <Route
            path="users"
            element={
              <div className=" w-full ">
                <Users />
              </div>
            }
          />
          <Route
            path="settings"
            element={
              <div className=" w-full ">
                <Settings />
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
