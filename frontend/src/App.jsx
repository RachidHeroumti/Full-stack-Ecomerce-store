import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Register from "./Pages/Register"
import Login from "./Pages/Login"
import Details from './Compoanent/Details'
import "react-toastify/dist/ReactToastify.css";
import { EcoState } from './Context/EcoProvider'
import CartItems from './Compoanent/CartItems'
import Address from './Compoanent/Address'
import Order from './Compoanent/Order'
import NavBar from './Compoanent/common/NavBar'

function App() {
  const { productDetails, address, dataToBay } = EcoState();

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<><NavBar /><Home /></>} />
        <Route path='/details' element={<><NavBar /><Details product={productDetails} /></>} />
        <Route path='/cart' element={<><NavBar /><CartItems /></>} />
        <Route path='/address' element={<><NavBar /><Address /></>} />
        <Route path='/order' element={<><NavBar /><Order addressInfo={address} /></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
