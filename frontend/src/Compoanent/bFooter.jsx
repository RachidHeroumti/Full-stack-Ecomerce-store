import React from 'react'
import Pic1 from "../assets/pic1.png"

function bFooter() {
  return (
    <div className='px-10 flex justify-center ' id='about'>
      <div className='flex flex-col lg:flex-row rounded-lg text-gray-700 bg-red-200 container '>
        <div className=' bg-gradient-to-t from-red-500 to-red-400 space-y-2 rounded-r-none  w-full py-10 p-5 rounded-lg '>
          <h1 className='text-xl '>
            <span className='text-xl  font-medium text-gray-50'> Shop Onlay</span> </h1>

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
