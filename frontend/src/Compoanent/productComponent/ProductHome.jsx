import React, { useEffect, useState } from 'react'
import { EcoState } from '../../Context/EcoProvider'
import axios from 'axios'
import { getProductRoute, AddcardRoute } from '../../RoutersApi/ApiRoutes'
import CardItem from './CardItem'



function ProductHome() {
  const[isLoading,setIsLoading]=useState("Loading ...");
  const { searchdata, setAllProduct, userToken } = EcoState()
  useEffect(() => {

    const getPrs = async () => {
      try {
        const res = await axios.get(getProductRoute);
        if(res.data.products){
          console.log("products came for db :",res.data)
          setAllProduct(res.data.products);
          // if the list empty when you search 
          setIsLoading("No item with this name");
        }
      
      } catch (err) {
        console.log(err);
      }
    }
    getPrs();
  }, []);






  return (
    <div id='shop' className=' mx-auto bg-red-50 py-[72px] px-10 container  flex flex-col justify-center '>

   {  searchdata&& <h1 className=' text-xl md:text-3xl  font-medium text-red-400 '
      ><span className=' text-gray-900  '>Featured Products</span></h1>
   }
     <CardItem products={searchdata} isLoading={isLoading}/>
   
    </div>
  )
}



export default ProductHome 
