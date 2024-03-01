import React from 'react'

function Hero() {

  return (

    <div className='max-w-[1640px] mx-auto h-[600px] bg-emerald-800' id='home'>
      <div className='flex items-center'>

        <div className='w-full h-[600px] flex p-12 flex-col justify-center '>
          <h1 className=' xl:text-7xl text-4xl py-1  font-bold
            text-gray-100'>Welecom to  </h1>
          <h1 className=' xl:text-7xl text-4xl py-1  font-bold
            text-gray-100'> shop onlay </h1>

          <p1 className="text-gray-300 text-xl py-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
            pariatur dolorum ullam minus ad fugiat delectus doloremque quo magnam at,
            possimus rem adipisci perspiciatis debitis magni excepturi? Nam, magni ex.</p1>

          <div className=' space-x-4 my-5 space-y-1'>
            <button className='text-2xl p-2 px-3 rounded-full bg-yellow-400 hover:bg-yellow-500'>Shop Now</button>
            <button className='text-2xl font-medium p-2 px-3 text-white hover:border-white 
              rounded-full border border-gray-300'>Explore</button>
          </div>
        </div>

        <img src='https://images.pexels.com/photos/2148216/pexels-photo-2148216.jpeg?auto=compress&cs=tinysrgb&w=300' alt=''
          className='w-full h-[600px] p-12 rounded hidden md:flex' />

      </div>
    </div>
  )
}

export default Hero
