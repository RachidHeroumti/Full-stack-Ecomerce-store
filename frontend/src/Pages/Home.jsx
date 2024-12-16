import React from 'react'
import NavBar from "../Compoanent/common/NavBar"
import Hero from '../Compoanent/Hero'
import ProductHome from '../Compoanent/productComponent/ProductHome'
import { ToastContainer } from 'react-toastify'
import Footer from '../Compoanent/common/Footer'
import BFooter from "../Compoanent/bFooter"
import ListCollection from '../Compoanent/Collections/ListCollection'
function Home() {
  return (
    <div className='max-w-[1640] scrollbar-thumb-red-200 scrollbar-thin bg-white
          scrollbar-track-slate-50 h-screen overflow-y-scroll font-poppins'>
      <NavBar />
      <Hero />
      <ListCollection/>
      <ProductHome />
      <BFooter />
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default Home
