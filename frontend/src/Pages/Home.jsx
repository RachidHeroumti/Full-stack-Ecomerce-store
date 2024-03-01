import React from 'react'
import NavBar from "../Compoanent/NavBar"
import Hero from '../Compoanent/Hero'
import ProductHome from '../Compoanent/ProductHome'
import { ToastContainer } from 'react-toastify'
import Footer from '../Compoanent/Footer'
import BFooter from "../Compoanent/bFooter"
function Home() {
  return (
    <div className='max-w-[1640] scrollbar-thumb-emerald-800 scrollbar-thin 
          scrollbar-track-slate-50 h-screen overflow-y-scroll'>
      <NavBar />
      <Hero />
      <ProductHome />
      <BFooter />
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default Home
