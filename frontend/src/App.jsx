import { useState } from 'react'
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

function App() {
  const { productDetails } = EcoState()
  const { address, dataToBay } = EcoState()

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/details' element={<Details product={productDetails} />} />
        <Route path='/cart' element={<CartItems />} />
        <Route path='/Address' element={<Address />} />
        <Route path='/Order' element={<Order addressInfo={address} />}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
