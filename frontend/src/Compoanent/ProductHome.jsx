import React, { useEffect, useState } from 'react'


import { EcoState } from '../Context/EcoProvider'
import axios from 'axios'
import { getProductRoute, AddcardRoute } from '../RoutersApi/ApiRoutes'
import CardItem from './CardItem'

function ProductHome() {
  const { searchdata, setAllProduct, userToken } = EcoState()
  const[isLoading,setIsLoading]=useState("Loading ...")


  useEffect(() => {

    const getPrs = async () => {
      try {
        const res = await axios.get(getProductRoute);
        if(res.data.products){
          setAllProduct(res.data.products);
          setIsLoading("No item ");
        }
      
      } catch (err) {
        console.log(err);
      }
    }
    getPrs();
  }, []);






  return (
    <div id='shop' className='max-w-[1640px] mx-auto bg-red-50 px-5 '>
      <h1 className=' text-xl md:text-3xl xl:text-5xl font-bold text-red-400 p-4 sm:p-10'
      >Our-<span className=' text-gray-900 '>best Product</span></h1>
     
     <CardItem products={searchdata}/>
    </div>
  )
}



export default ProductHome 
