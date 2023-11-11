import React, { useEffect, useState } from 'react'
import {AiOutlineMenu,AiOutlineSearch,AiOutlineClose,AiFillTag,AiFillCaretRight} from "react-icons/ai"
import {BsFillCartFill } from "react-icons/bs"
import {TbTruckDelivery} from "react-icons/tb"
import{MdFavorite ,MdHelp} from "react-icons/md"
import {FaWallet ,FaUserFriends } from "react-icons/fa"
import { BsFillSaveFill} from "react-icons/bs"
import { FaUser } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'
import { EcoState } from '../Context/EcoProvider'

function NavBar() {
const [isUserAdmin,setIsUserAdmin]=useState(false) ;
 const navigate =useNavigate();
 const {setSearchData ,searchdata,allProduct} =EcoState();
 const[nav,setNav]=useState(false);
 const [category,setCategory]=useState([]);

   const goToCart=()=>{
      navigate('/cart');
   }
  const onSearch =(name)=>{
      const searchStr = name.toLowerCase();
     setSearchData(
       allProduct.filter((item)=>{
           const itemName = item.title.toLowerCase();
        return itemName.startsWith(searchStr);
       })
     )
  } 
   useEffect(()=>{
      fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(cats=>{
            
                setCategory(cats)
            })
            
   },[])


 const onSetCategory=(ctgName)=>{

    setSearchData(
       allProduct.filter((item)=>{
        return item.category==ctgName ;
       })
      
    )
     setNav(false) ;
 }

  return (
    <div className=' flex justify-between p-3 fixed top-0 left-0 z-10 bg-white w-full'>
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
          className=' bg-gray-950 hover:bg-gray-800 text-white rounded-lg  px-3 py-1  md:flex items-center'>
              <BsFillCartFill size={20} className='mr-2'/>
         </button>
    </div>

        { nav ? <div className='fixed h-screen w-full bg-black/80 top-0 left-0 z-10'>
         </div> :""}

         {nav ? <div className='max-w-[350px] h-screen fixed top-0 left-0 z-10 bg-white px-1 '>
            <div className=' bg-gray-100 py-2 flex items-center justify-between '>
              <h1 className='lg:text-2xl text-gray-900 font-bold flex items-center'><FaUser size={20} className='mx-3'/>
               My Account </h1>
               <AiOutlineClose  size={25} className='mx-2 text-2xl font-bold'  onClick={()=>{setNav(false)}}/>
            </div>
       {
         isUserAdmin ?
          <div className='p-3'>
            <h1 className='text-xl py-1 bg-slate-300 rounded-lg cursor-pointer my-1 text-center'>Add Product </h1>
            <h1 className='text-xl py-1 bg-slate-300 rounded-lg cursor-pointer my-1 text-center'>Add Category</h1>
          </div> 
            
            :""
       }
            <div className='px-2 cursor-pointer '>
               <h1 className='text-gray-800 pt-3 font-bold text-xl'>Categories</h1>
               {
           category.map((item,i)=>{
            return ( <div key={i} className='text-xl text-gray-500 flex justify-between items-center  py-2'><p>{item}</p> <AiFillCaretRight /></div>)
                  })
               }
            

            </div>
         </div> :""}
    </div>
  )
}

export default NavBar
