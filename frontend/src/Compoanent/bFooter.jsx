import React from 'react'

function bFooter() {
  return (
    <div className='max-w-[1640]  p-5'>
       <div className='flex flex-col lg:flex-row rounded-lg'>
       

         <div className=' bg-gradient-to-t from-gray-100 to-gray-400 rounded-r-none  w-full py-10 p-5 rounded-lg '>
             <h1 className='text-xl font-bold '>
                <span className='text-3xl font-bold text-orange-800'> Shop Onlay</span> </h1>
             <p className='text-xl'>- Shop Onlay is the e-commerce platform that caters to your lifestyle,
                 offering everything from fashion and electronics to home essentials.</p>
               <p className='text-xl'>- Shop Onlay brings together a curated selection of products, 
              ensuring that you'll always find what you're looking for.</p>
               <p className='text-xl'>- With Shop Onlay, you can shop with confidence,
                   knowing that we prioritize customer satisfaction and security.</p>
              <p>And More ...</p>
         </div>
          <img src='https://images.pexels.com/photos/18618360/pexels-photo-18618360/free-photo-of-rosie.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load' alt=''
           className='h-[400px] w-[300px] rounded-l-none rounded-lg w-full object-cover '/>
       </div>
    </div>
  )
}

export default bFooter
