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
import "@fontsource/poppins";
import Footer from "./Compoanent/common/Footer";
import BFoote from "./Compoanent/common/bFooter";
import Shop  from "./Pages/Shop"
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
              <BFoote />
              <Footer />
            </>
          }
        />
         <Route
          path="/shop"
          element={
            <>
              <NavBar />
              <Shop/>
              <BFoote />
              <Footer />
            </>
          }
        />
        <Route
          path="/details"
          element={
            <>
              <NavBar />
              <Details product={productDetails} />
              <BFoote />
              <Footer />
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <>
              <NavBar />
              <CartItems />
              <BFoote />
              <Footer />
            </>
          }
        />
        <Route
          path="/address"
          element={
            <>
              <NavBar />
              <Address />
              <BFoote />
              <Footer />
            </>
          }
        />
        <Route
          path="/order"
          element={
            <>
              <NavBar />
              <Order addressInfo={address} />
              <BFoote />
              <Footer />
            </>
          }
        />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
