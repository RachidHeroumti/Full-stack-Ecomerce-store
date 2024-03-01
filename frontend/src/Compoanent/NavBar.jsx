import React, { useEffect, useState } from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag, AiFillCaretRight } from "react-icons/ai"
import { BsFillCartFill } from "react-icons/bs"
import { TbTruckDelivery } from "react-icons/tb"
import { MdFavorite, MdHelp } from "react-icons/md"
import { FaWallet, FaUserFriends } from "react-icons/fa"
import { BsFillSaveFill } from "react-icons/bs"
import { FaUser } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'
import { EcoState } from '../Context/EcoProvider'

function NavBar() {
   const [isUserAdmin, setIsUserAdmin] = useState(false);
   const navigate = useNavigate();
   const { setSearchData, searchdata, allProduct } = EcoState();
   const [nav, setNav] = useState(false);
   const [category, setCategory] = useState([]);

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
   useEffect(() => {
      fetch('https://fakestoreapi.com/products/categories')
         .then(res => res.json())
         .then(cats => {

            setCategory(cats)
         })

   }, [])


   const onSetCategory = (ctgName) => {

      setSearchData(
         allProduct.filter((item) => {
            return item.category == ctgName;
         })

      )
      setNav(false);
   }

   return (

      <div className=' flex justify-between p-3  fixed start-0 top-0 end-0  z-10 
        bg-emerald-800 w-full'>
         <div className=' flex items-center py-2'>
            <div className=' flex md:hidden' >
               {<AiOutlineMenu size={25} className=' text-white mx-2' onClick={() => { setNav(true) }} />}
            </div >
            <h1 className='lg:text-4xl text-xl font-bold px-3 hidden xl:flex text-white'>Shop Onlay</h1>

         </div>
         <div className=' bg-transparnt text-white flex items-center rounded-lg md:px-3 '>
            <AiOutlineSearch size={25} className='' />
            <input onChange={(e) => { onSearch(e.target.value) }}
               type='text' className='outline-none bg-transparent'
               placeholder='Search for product' />
         </div>
         <div className='text-gray-300 flex px-5 items-center' id='home'>
            <div className=' hidden md:flex items-center'>
               <a href='#home' className='text-xl hover:border-b-8 mx-5 border-b-yellow-600  rounded-lg 
               hover:text-white  text-center' >Home</a>
               <a href='#about' className='text-xl hover:border-b-8 mx-5 border-b-yellow-600 rounded-lg 
               hover:text-white  text-center' >About</a>
               <a href='#shop' className='text-xl hover:border-b-8 mx-5 border-b-yellow-600 rounded-lg 
               hover:text-white  text-center' >Shop</a>
               <a href='#contact' className='text-xl hover:border-b-8 mx-5 border-b-yellow-600 rounded-lg 
               hover:text-white  text-center' >Contact</a>
            </div>


            <button onClick={() => { goToCart(); }}
               className=' hover:border-b-yellow-600  rounded-lg 
               text-xl hover:border-b-8 mx-1 sm:mx-5 border-b-yellow-600 
               hover:text-white  text-center
                px-3 md:flex items-center'>
               <span className='md:flex hidden'>Cart</span><BsFillCartFill size={20} className='mx-2' />
            </button>
         </div>

         {nav ? <div className='fixed h-screen w-full bg-black/80 top-0 left-0 z-10'>
         </div> : ""}

         {nav ? <div className='max-w-[350px] h-screen fixed top-0 left-0 z-10 bg-white px-1 '>
            <div className=' bg-emerald-800 py-2 flex items-center justify-between '>
               <h1 className='lg:text-2xl text-gray-50 font-medium flex items-center'><FaUser size={20} className='mx-3' />
                  My Account </h1>
               <AiOutlineClose size={25} className='mx-2 text-xl text-yellow-600 md:text-2xl font-bold' onClick={() => { setNav(false) }} />
            </div>
            {
               isUserAdmin ?
                  <div className='p-3'>
                     <h1 className='text-xl py-1 bg-slate-300 rounded-lg cursor-pointer my-1 text-center'>Add Product </h1>
                     <h1 className='text-xl py-1 bg-slate-300 rounded-lg cursor-pointer my-1 text-center'>Add Category</h1>
                  </div>

                  : ""
            }

            <div className='px-2 cursor-pointer '>
               <div className='space-y-2 flex flex-col'>
                  <a href='#home' className='text-xl hover:border-b-8  border-b-yellow-600  rounded-lg 
                hover:text-gray-900 ' >Home</a>
                  <a href='#about' className='text-xl hover:border-b-8 border-b-yellow-600 rounded-lg 
                hover:text-gray-900  ' >About</a>
                  <a href='#shop' className='text-xl hover:border-b-8  border-b-yellow-600 rounded-lg 
                hover:text-gray-900  ' >Shop</a>
                  <a href='#contact' className='text-xl hover:border-b-8  border-b-yellow-600 rounded-lg 
               hover:text-gray-900  ' >Contact</a>
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
