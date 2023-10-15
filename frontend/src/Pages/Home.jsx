import React from 'react'
import NavBar from "../Compoanent/NavBar"
import Hero from '../Compoanent/Hero'
import ProductHome from '../Compoanent/ProductHome'
import { ToastContainer} from 'react-toastify'
import Footer from '../Compoanent/Footer'
import BFooter from "../Compoanent/bFooter"
function Home() {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <ProductHome/>
      <BFooter/>
      <Footer/>
      <ToastContainer/>
    </div>
  )
}

export default Home
