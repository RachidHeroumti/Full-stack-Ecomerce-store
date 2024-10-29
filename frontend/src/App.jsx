import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Details from "./Compoanent/productComponent/Details";
import "react-toastify/dist/ReactToastify.css";
import { EcoState } from "./Context/EcoProvider";
import CartItems from "./Compoanent/productComponent/CartItems";
import Address from "./Compoanent/orderComponent/Address";
import Order from "./Compoanent/orderComponent/Order";
import NavBar from "./Compoanent/common/NavBar";
import DashbordAdmin from "./Compoanent/dashbordComponent/DashbordAdmin";
import DashbordSeller from "./Compoanent/dashbordComponent/DashbordSeller";
import UserProfile from "./Compoanent/dashbordComponent/DashbordSeller";
import "@fontsource/poppins";

function App() {
  const { productDetails, address } = EcoState();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Home />
            </>
          }
        />
        <Route
          path="/details"
          element={
            <>
              <NavBar />
              <Details product={productDetails} />
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <>
              <NavBar />
              <CartItems />
            </>
          }
        />
        <Route
          path="/address"
          element={
            <>
              <NavBar />
              <Address />
            </>
          }
        />
        <Route
          path="/order"
          element={
            <>
              <NavBar />
              <Order addressInfo={address} />
            </>
          }
        />

        <Route
          path="/dashbord-admin"
          element={
            <>
              <NavBar />
              <DashbordAdmin />
            </>
          }
        />
        <Route
          path="/dashbord-seller"
          element={
            <>
              <NavBar />
              <DashbordSeller />
            </>
          }
        />

        <Route
          path="/profile"
          element={
            <>
              <NavBar />
              <UserProfile />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
