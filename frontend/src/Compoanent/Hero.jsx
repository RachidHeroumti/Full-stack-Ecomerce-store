import React from 'react'
import PIC1 from "../assets/pic1.png"
import PIC2 from "../assets/pic2.png"
import PIC3 from "../assets/pic3.png"

function Hero() {

  return (

    <div className='max-w-[1640px] mx-auto  bg-red-200' id='home'>

      <div className='flex items-center '>

        <div className='w-full h-[600px] flex p-12 flex-col justify-center text-gray-900 '>
          <h1 className=' xl:text-7xl text-4xl py-1  font-bold
           '>Welecom to  </h1>
          <h1 className=' xl:text-7xl text-4xl py-1  font-bold
           '> shop onlay </h1>

          <p1 className="text-gray-600 text-xl py-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
            pariatur dolorum ullam minus ad fugiat delectus doloremque quo magnam at,
            possimus rem adipisci perspiciatis debitis magni excepturi? Nam, magni ex.</p1>

          <div className=' space-x-4 my-5 space-y-1'>
            <a href='#shop' className='text-2xl p-2 px-3 text-white rounded-full bg-red-500 hover:bg-red-600'>Shop Now</a>
            <a href='#explore' className='text-2xl font-medium p-2 px-3 text-gray-800 hover:border-gray-800 
              rounded-full border border-gray-300'>Explore</a>
          </div>
        </div>

        <img src={PIC3} alt=''
          className='w-full h-[600px] p-12 rounded hidden md:flex' />

      </div>



      <div id='explore' className=' p-5 bg-red-50 flex flex-col sm:my-12 my-4  sm:space-y-3 sm:pt-12'>
        <h1 className='  text-center text-xl sm:text-5xl font-bold text-gray-800'>
          <span className=' text-red-600 px-1 '>Popular</span> Categories</h1>
        <p className='text-center p-1 mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt assumenda est animi quas dolor
          commodi dolorem magni. </p>
        <div className=' grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6   p-4'>

          <div className=' bg-white rounded shadow-md flex flex-col items-center p-4 justify-center'>
            <img src='https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=300' alt='img'
              className=' w-[100px] h-[100px] rounded-full  ' />
            <h1 className=' text-2xl text-gray-950 font-smibold p-2'>Men's </h1>
            <p className=' text-xl text-gray-600 p-1'>+170 available</p>

          </div>

          <div className=' bg-white rounded shadow-md flex flex-col items-center p-4 justify-center'>
            <img src='https://images.pexels.com/photos/16711632/pexels-photo-16711632/free-photo-of-camera-on-black-background.jpeg?auto=compress&cs=tinysrgb&w=300' alt='img'
              className=' w-[100px] h-[100px] rounded-full  ' />
            <h1 className=' text-2xl text-gray-950 font-smibold p-2'>Technologies</h1>
            <p className=' text-xl text-gray-600 p-1'>+100 available</p>

          </div>

          <div className=' bg-white rounded shadow-md flex flex-col items-center p-4 justify-center'>
            <img src='https://media.istockphoto.com/id/171224469/photo/canvas-shoes.jpg?b=1&s=612x612&w=0&k=20&c=U9NLTutbuQ_L3HABoaa9Bsb_U3iJYw1QmKCBe0H3KWM=' alt='img'
              className=' w-[100px] h-[100px] rounded-full  ' />
            <h1 className=' text-2xl text-gray-950 font-smibold p-2'>Shoes</h1>
            <p className=' text-xl text-gray-600 p-1'>+170 available</p>

          </div>

          <div className=' bg-white rounded shadow-md flex flex-col items-center p-4 justify-center'>
            <img src='https://images.pexels.com/photos/2105493/pexels-photo-2105493.jpeg?auto=compress&cs=tinysrgb&w=300' alt='img'
              className=' w-[100px] h-[100px] rounded-full  ' />
            <h1 className=' text-2xl text-gray-950 font-smibold p-2'>Sports</h1>
            <p className=' text-xl text-gray-600 p-1'>+300 available</p>

          </div>

          <div className=' bg-white rounded shadow-md flex flex-col items-center p-4 justify-center'>
            <img src='https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=300' alt='img'
              className=' w-[100px] h-[100px] rounded-full  ' />
            <h1 className=' text-2xl text-gray-950 font-smibold p-2'>women's </h1>
            <p className=' text-xl text-gray-600 p-1'>+170 available</p>

          </div>

          <div className=' bg-white rounded shadow-md flex flex-col items-center p-4 justify-center'>
            <img src='https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=300' alt='img'
              className=' w-[100px] h-[100px] rounded-full  ' />
            <h1 className=' text-2xl text-gray-950 font-smibold p-2'>Cuisine</h1>
            <p className=' text-xl text-gray-600 p-1'>+170 available</p>

          </div>

        </div>

        <div className=' flex text-white justify-center items-center'>
          <button className='text-center bg-gray-900 p-2 rounded-md text-xl'>See More {"->"}</button>
        </div>

      </div>



    </div>
  )
}

export default Hero
