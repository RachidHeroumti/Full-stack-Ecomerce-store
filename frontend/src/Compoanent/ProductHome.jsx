import React, { useEffect, useState } from 'react'
import {TbTruckDelivery} from "react-icons/tb"
import{MdFavorite ,MdHelp} from "react-icons/md"
import {FaWallet ,FaUserFriends } from "react-icons/fa"
import { BsFillSaveFill} from "react-icons/bs"
import {BsFillCartFill } from "react-icons/bs" 
import {AiOutlineMenu,AiOutlineSearch,AiOutlineClose,AiFillTag,AiFillCaretRight} from "react-icons/ai"
import {products} from "../data/data"
import { useNavigate } from 'react-router-dom'
import {  toast } from 'react-toastify'
import { EcoState } from '../Context/EcoProvider'

function ProductHome() {
  const {searchdata,setProductDetails,setSearchData} =EcoState()
  const navigate=useNavigate();

   const toastOptions = {
    position: "bottom-right",
    autoClose: 500,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  };


   const OnDetailes =(product)=>{
     setProductDetails(product) ;
       navigate("/details");
   }
   const AddToCart =()=>{
     toast.success("Add to cart successfuly ",toastOptions) ;
   }



  return (
    <div className='max-w-[1640px] mx-auto p-4'>
      <div className=' grid lg:grid-cols-4 md:grid-cols-2 gap-6'>
   
     {  searchdata.map((product,i)=>{
   return  (
     <div key={i} className='rounded-lg shadow-lg border hover:scale-105 duration-300 '>
          <img src={product.image} alt=''
           className='rounded-lg  w-full h-[300px] p-2' />
           <div className='px-1'>
            <h2 className=' text-xl font-light'>{product.title}</h2>
            <h2 className='text-xl font-bold text-orange-600'> {product.price}<span> $$</span></h2>
           </div>
           <div className='flex flex-col'>
              <button onClick={()=>{AddToCart()}}
                className='flex items-center bg-gradient-to-tr from-gray-200 to-gray-300 rounded-full text-center px-3 py-1 text-black my-1'>
                  <BsFillCartFill  className='mx-1'/>
                 Add to cart</button>
                         <button onClick={()=>{OnDetailes(product)}}
                           className='flex items-center bg-gradient-to-tr  from-gray-200 to-gray-300 rounded-full text-center px-3 py-1 text-black my-1'>
                  <AiFillCaretRight  className='mx-1'/>
                Details</button>
          
           </div>
        
        </div>
         )
     }) 
  
}
            
        

      </div>
      {/**Another card */}
    </div>
  )
}

export default ProductHome
