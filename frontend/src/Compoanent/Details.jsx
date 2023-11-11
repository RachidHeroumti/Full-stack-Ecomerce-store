import axios from 'axios';
import React, { useState } from 'react'
import {BsFillCartFill } from "react-icons/bs"
import { useNavigate } from 'react-router-dom';
import {ToastContainer, toast } from 'react-toastify' 
import {AddcardRoute} from '../RoutersApi/ApiRoutes'

function Details({product}) {
   const [quantity, setQuantity] = useState(1);
   const navigate=useNavigate() ;
   const [imagePr,setImagePr]=useState(product.image)
  const toastOptions = {
    position: "bottom-right",
    autoClose: 500,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  };
    const AddToCart =async()=>{
       const token=localStorage.getItem('token');

       if(token){
         const config={
           headers:{
            Authorization :`Bearer ${token}`,
           }
         }
        try{
          const res=await axios.post(AddcardRoute,config);
           if(res.data._id){
              toast.success("Add to cart successfuly ",toastOptions) ;
           }

        }catch(err){
          console.log(err);
        }
      }
     
   }

  //Event handler to update the quantity when the input changes
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
               <img src={imagePr} alt='' 
                 className='w-full h-[350px] object-cover'/>
                <div className='flex items-center p-2'>
                   <img src={product.images[0]} alt=''
                     onClick={()=>{setImagePr(product.images[0])}} 
                       className='h-[100px] w-[75px] px-1'/>
                   <img src={product.images[1]} alt=''
                          onClick={()=>{setImagePr(product.images[1])}}  
                       className='h-[100px] w-[75px] px-1'/>  
                   <img src={product.images[2]} alt=''
                         onClick={()=>{setImagePr(product.images[2])}}  
                       className='h-[100px] w-[75px] px-1'/>  
                   <img src={product.images[3]} alt='' 
                          onClick={()=>{setImagePr(product.images[3])}} 
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
