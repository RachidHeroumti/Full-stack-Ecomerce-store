import React, { useState } from 'react'
import {AiOutlineMenu,AiOutlineSearch,AiOutlineClose,AiFillTag,AiFillCaretRight} from "react-icons/ai"
import {BsFillCartFill } from "react-icons/bs"
import {TbTruckDelivery} from "react-icons/tb"
import{MdFavorite ,MdHelp} from "react-icons/md"
import {FaWallet ,FaUserFriends } from "react-icons/fa"
import { BsFillSaveFill} from "react-icons/bs"
import { FaUser } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'
import { EcoState } from '../Context/EcoProvider'
import { products } from '../data/data'

function NavBar() {
 const navigate =useNavigate();
 const {setSearchData ,searchdata} =EcoState();
 const {allProduct,setAllProduct} =EcoState()
   const[nav,setNav]=useState(false);
   const goToCart=()=>{
      navigate('/cart');
   }
  const onSearch =(name)=>{
     console.log("search for : ",name)
      const searchStr = name.toLowerCase();

     setSearchData(
       products.filter((item)=>{
           const itemName = item.name.toLowerCase();
        return itemName.startsWith(searchStr);
       })
     )
     console.log("search pr : ",searchdata)
  }
 const onSetCategory=(ctgName)=>{
   
    setSearchData(
       products.filter((item)=>{
        return item.category==ctgName ;
       })
      
    )
     setNav(false) ;
 }

  return (
    <div className=' flex justify-between p-3 fixed top-0 left-0 bg-white w-full'>
       <div className='max-h-[200px] flex items-center '>
        <div >
          <AiOutlineMenu size={25} className='' onClick={()=>{setNav(true)}}/>
        </div >
         <h1 className='lg:text-3xl font-bold px-3'>Shop Onlay</h1>
         
       </div>
       <div className=' bg-gray-100 flex items-center rounded-lg px-3'>
        <AiOutlineSearch  size={25} className=''/>
        <input  onChange={(e)=>{ onSearch(e.target.value) }}
           type='text' className='  outline-none bg-transparent'
           placeholder='Search for product'/>
       </div>
   <div> 
         <button  onClick={()=>{  goToCart() ; }}
          className=' bg-black text-white rounded-full px-2 py-1  md:flex items-center'>
              <BsFillCartFill size={20} className='mr-2'/>
         </button>
    </div>

        { nav ? <div className='fixed h-screen w-full bg-black/80 top-0 left-0 z-10'>
         </div> :""}

         {nav ? <div className='max-w-[250px] h-screen fixed top-0 left-0 z-10 bg-white px-2 '>
            <div className=' bg-gray-100 py-2 flex items-center justify-between'>
              <h1 className='lg:text-2xl text-gray-900 font-bold flex items-center'><FaUser size={20} className='mx-3'/>
               My Account </h1>
               <AiOutlineClose  size={20}  onClick={()=>{setNav(false)}}/>
            </div>

            <div className='px-2 cursor-pointer'>
               <h1 className='text-gray-800 pt-3 font-bold text-xl'>Categories</h1>
             <div onClick={()=>{onSetCategory("Apparel and accessorie")}}
                   className=' flex justify-between items-center  py-2' ><p>Apparel and accessorie</p> <AiFillCaretRight /></div>
             <div onClick={()=>{onSetCategory("Consumer electronics")}} 
                   className=' flex justify-between items-center  py-2'><p>Consumer electronics</p> <AiFillCaretRight /></div>
             <div className=' flex justify-between items-center  py-2'><p>Books,games</p> <AiFillCaretRight /></div>
             <div className=' flex justify-between items-center  py-2'><p>Health, personal care, and beauty</p> <AiFillCaretRight /></div>
             <div className=' flex justify-between items-center  py-2'><p>Food and beverage</p> <AiFillCaretRight /></div>
            </div>
         </div> :""}
    </div>
  )
}

export default NavBar
