import React, { useEffect, useState } from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag, AiFillCaretRight } from "react-icons/ai"
import { BsFillCartFill } from "react-icons/bs"
import { FaUser } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'
import { EcoState } from '../../Context/EcoProvider'
import { useWindowSize } from '@react-hook/window-size';

function NavBar() {
   const navigate = useNavigate();
   const { setSearchData, searchdata, allProduct } = EcoState();
   const [nav, setNav] = useState(false);

   const [isSearch, setIsSreach] = useState(false);
   const [screenH, screenW] = useWindowSize();

   const goToCart = () => {
      navigate('/cart');
   }
   
   const onSearch = (name) => {
      const searchStr = name.toLowerCase();
      setSearchData(
         allProduct.filter((item) => {
            const itemName = item.title.toLowerCase();
            return itemName.startsWith(searchStr);
         })
      )
   }




   const onLinkTo = (id) => {
      navigate(`/#${id}`);
   }

   const onShowSearch = () => {
      if (!isSearch) setIsSreach(true);
      else setIsSreach(false);
   }

   useEffect(() => {
      if (screenH >= 815 && screenW >= 940) {
         setIsSreach(true);
      }
   }, []);

   return (
      <div className=' flex justify-between sm:p-3 p-1 fixed start-0 top-0 end-0  z-10 
        bg-red-100 w-full'>
         <div className=' flex items-center py-2'>
            <div className=' flex md:hidden' >
               {<AiOutlineMenu size={20} className=' text-gray-800 mx-2' onClick={() => { setNav(true) }} />}
            </div >
            <h1 className='lg:text-4xl text-xl font-bold px-3 hidden xl:flex text-gray-800'>Shop Onlay</h1>

         </div>
         <div className=' bg-transparnt text-black flex items-center rounded-lg md:px-3 space-x-1'>
            <AiOutlineSearch size={20} className=' hidden sm:flex '
               onClick={() => onShowSearch()} />
          
               <input onChange={(e) => { onSearch(e.target.value) }}
                  type='text' className='outline-none bg-red-50 sm:bg-transparent rounded-md p-1 sm:text-xl text-gray-900'
                  placeholder="Search for product " /> 
            

         </div>
         <div className='text-gray-950 flex px-1 sm:px-5 items-center '>
            <div className=' hidden md:flex items-center  font-bold'>
               <a href='#home' onClick={() => onLinkTo("home")}
                  className='text-xl  mx-5   rounded-lg
                hover:text-gray-50 hover:bg-red-500   p-1  text-center' >Home</a>
               <a href='#about' className='text-xl  mx-5   rounded-lg
                hover:text-gray-50 hover:bg-red-500  p-1  text-center' >About</a>
               <a href='#shop' className='text-xl mx-5  rounded-lg
               hover:text-gray-50 hover:bg-red-500  p-1  text-center' >Shop</a>
               <a href='#contact' className='text-xl   rounded-lg
               hover:text-gray-50 hover:bg-red-500  p-1  text-center' >Contact</a>
            </div>


            <button onClick={() => { goToCart(); }}
               className='   rounded-lg flex font-bold
               text-xl  mx-2 hover:text-gray-50 hover:bg-red-500  p-1
                 text-center
                px-3 md:flex items-center'>
               <span className='md:flex hidden'>Cart</span><BsFillCartFill size={20} className='mx-2' />
            </button>
            <a href='/login' className='text-xl text-white  rounded-lg
               bg-red-500 hover:bg-red-600  p-1  text-center' >Login</a>
         </div>


         {nav ? <div className='fixed h-screen w-full bg-black/80 top-0 left-0 z-10'>
         </div> : ""}

         {nav ? <div className='max-w-[350px] h-screen fixed top-0 left-0 z-10 bg-gray-100 px-1 '>
            <div className=' bg-red-200 py-2 flex items-center justify-between '>
               <h1 className='lg:text-2xl text-gray-900 font-medium flex items-center'><FaUser size={20} className='mx-3' />
                  My Account </h1>
               <AiOutlineClose size={25} className='mx-2 text-xl text-red-600 md:text-2xl font-bold' onClick={() => { setNav(false) }} />
            </div>

            <div className=''>
               <div className='space-y-2 flex flex-col'>
                  <a href='#home' onClick={() => onLinkTo("home")}
                     className='text-xl     rounded-lg
          hover:text-gray-50 hover:bg-red-500   p-1  ' >Home</a>
                  <a href='#about' className='text-xl    rounded-lg
                hover:text-gray-50 hover:bg-red-500  p-1  ' >About</a>
                  <a href='#shop' className='text-xl   rounded-lg
               hover:text-gray-50 hover:bg-red-500  p-1  ' >Shop</a>
                  <a href='#contact' className='text-xl   rounded-lg
               hover:text-gray-50 hover:bg-red-500  p-1 ' >Contact</a>
               </div>


               {/* <h1 className='text-gray-800 pt-3 font-bold text-xl'>Categories</h1>
               {
                  category.map((item, i) => {
                     return (<div key={i} className='text-xl text-gray-500 flex justify-between items-center hover:text-gray-800  py-2'
                        onClick={() => { onSetCategory(item.name) }}>
                        <p>{item}</p> <AiFillCaretRight /></div>)
                  })
               } */}


            </div>
         </div> : ""}
      </div>
   )
}

export default NavBar
