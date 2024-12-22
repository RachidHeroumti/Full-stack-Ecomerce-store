import React from 'react'
import Pic1 from "../../assets/pic1.png"

function bFooter() {
  return (
    <div className='flex justify-center bg-slate-700 text-white' id='about'>
      <div className='flex flex-col lg:flex-row rounded-lg  container '>
        <div className=' bg-gradient-to-t   space-y-2 rounded-r-none  w-full py-10 p-5 rounded-lg '>
          <h1 className='text-xl '>
            <span className='text-xl  font-medium '> Shop Onlay</span> </h1>

          <p className=''>- Shop Onlay is the e-commerce platform that caters to your lifestyle,
            offering everything from fashion and electronics to home essentials.</p>
          <p className=''>- Shop Onlay brings together a curated selection of products,
            ensuring that you'll always find what you're looking for.</p>
          <p className=''>- With Shop Onlay, you can shop with confidence,
            knowing that we prioritize customer satisfaction and security.</p>
          <p className=' text-gray-600 text-sm '>And More ...</p>
        </div>
        <img src={Pic1} alt=''
          className='h-[400px] rounded-l-none rounded-lg w-full object-cover ' />
      </div>
    </div>
  )
}

export default bFooter
