import  { useEffect, useState } from 'react'
import { EcoState } from '../../Context/EcoProvider'
import axios from 'axios'
import { getProductRoute } from '../../RoutersApi/ApiRoutes'
import CardItem from './CardItem'



function ProductHome() {
  const[isLoading,setIsLoading]=useState("Loading ...");
  const { searchdata, setAllProduct } = EcoState()
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
    <div id='shop' className='  py-[72px] xl:px-28 px-0 container   '>

   {  searchdata&& <h1 className=' text-2xl mb-8 font-medium  text-gray-900  text-center w-full'
      >Featured Products</h1>
   }
     <CardItem products={searchdata} isLoading={isLoading}/>
   
    </div>
  )
}



export default ProductHome 
