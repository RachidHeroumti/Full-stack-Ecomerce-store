import React, { useState } from 'react'
import {BsFillCartFill } from "react-icons/bs"
import { useNavigate } from 'react-router-dom';
import {ToastContainer, toast } from 'react-toastify' 

function Details({product}) {
   const [quantity, setQuantity] = useState(1);
   const navigate=useNavigate() ;
     const toastOptions = {
    position: "bottom-right",
    autoClose: 500,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  };
    const AddToCart =()=>{
       console.log("added to cart !")
     toast.success("Add to cart successfuly ",toastOptions) ;
   }
  // Event handler to update the quantity when the input changes
  const handleQuantityChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    setQuantity(newValue);
  };
 
   const OnBuy=()=>{
    const ad=localStorage.getItem("ad") ;
    if(!ad)
    navigate("/Address") ;
   else
    navigate('/order')
   }
  return (

    <div className='max-w-[1640] py-3'>
      <div className='lg:flex lg:items-center '>
        <div className='lg:w-[400px] flex m-2  flex-col'>
               <img src={product.image} alt='' 
                 className='w-full object-cover'/>
                 <div className='flex items-center p-2'>
                   <img src='https://images.pexels.com/photos/5588490/pexels-photo-5588490.jpeg?auto=compress&cs=tinysrgb&w=300' alt='' 
                       className='h-[100px] w-[75px] px-1'/>
                   <img src='https://images.pexels.com/photos/6893376/pexels-photo-6893376.jpeg?auto=compress&cs=tinysrgb&w=300' alt='' 
                       className='h-[100px] w-[75px] px-1'/>  
                   <img src='https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg?auto=compress&cs=tinysrgb&w=300' alt='' 
                       className='h-[100px] w-[75px] px-1'/>  
                   <img src='https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=300' alt='' 
                       className='h-[100px] w-[75px] px-1'/>         
                 </div>
        </div>
   
        <div className='flex flex-col w-full'>
          <h2 className=' text-3xl font-bold text-gray-950 '>{product.title}</h2>
          <h1 className=' text-xl text-orange-600 font-bold px-5'>{product.price} <span>$$</span></h1>
          <div className='items-center flex flex-row '>
               <button onClick={()=>{OnBuy()}}
                className='flex items-center bg-orange-500 rounded-full text-center px-3 py-1 text-black m-5'>
                  
                 Buy Now</button>
                <input  type="number" 
              className="outline-none bg-gray-100 rounded text-center text-xl font-bold py-2 px-3" max={10}   min={1} 
               value={quantity}
               onChange={handleQuantityChange} 
      />
                 </div>
              
          <p className='text-gray-900 p-2 text-xl'>
            {product.description}
          </p>
        </div>

      </div>
       <button onClick={()=>{AddToCart()}}
                className='flex fixed bottom-0 right-0 items-center text-2xl
                     font-bold bg-orange-500 rounded-full text-center p-3 text-black m-5'>
                  <BsFillCartFill  className='mx-1 '/>
                 +</button>
                 <ToastContainer/>
    </div>
  )
}

export default Details
