 import React, { useEffect, useState } from 'react'
  import {products} from "../data/data"
import { EcoState } from '../Context/EcoProvider';
import { useNavigate } from 'react-router-dom';
import {BsFillCartFill } from "react-icons/bs" 
import {AiFillCaretRight ,AiFillDelete} from "react-icons/ai"
import NavBar from './NavBar';

 function CardItems() {
 const {setProductDetails,allProduct} =EcoState();
 const[total,setTotal] =useState(0);
 const[dataIncart,setDataIncart]=useState([]) ;
 const navigate =useNavigate();
  
     const OnDetailes =(product)=>{
     setProductDetails(product) ;
      navigate("/details");
     }
      const addToTotal =()=>{
              let t=0;
            dataIncart.map((item,i)=>{
             const price = parseFloat(item.price); 
          if (!isNaN(price)) {
              t += price;
           }
        })
        setTotal(t.toFixed(2)) ;
     }
      useEffect(()=>{ 
         console.log("data in cart changed ")
         if(dataIncart)     
           addToTotal() ;
      },[dataIncart])
useEffect(()=>{
     setDataIncart(allProduct) ;
    },[]) ;
       
    const onDeletFromCart=(i)=>{ 
        const productsCopy =dataIncart;
      const deletedItem = productsCopy.splice(i+1,0);
        console.log(" pr copy : ",productsCopy); 
       setDataIncart(
         productsCopy.filter((item)=>{
          return item.title!=i.title ;
         })
       );
      }
      const OnBuy=()=>{
        navigate("/address");
      }

 return (
    <div className='max-w-[1640px] mx-auto p-4 mt-10'>
       <NavBar/>
      <div className='max-w-[1640px] mx-auto flex flex-row '>
      <div className=' grid lg:grid-cols-3 md:grid-cols-2 gap-6 w-full'>
   
     {  dataIncart.map((product,i)=>{
   return  (
     <div key={i} className='rounded-lg shadow-lg border hover:scale-105 duration-300 '>
          <img src={product.image} alt=''
           className='rounded-lg  w-full h-[250px]' />
           <div className='px-1'>
            <h2 className=' text-2xl font-light'>{product.title}</h2>
            <h2 className='text-xl font-bold text-orange-600'> {product.price}<span> $$</span></h2>
           </div>
           <div className='flex flex-row justify-between mx-5'>
              <button  onClick={()=>{onDeletFromCart(product)}}
                className='flex items-center bg-gradient-to-tr from-gray-200 to-gray-300 rounded-full text-center px-3 py-1 text-black my-1'>
                  <AiFillDelete  className='mx-1'/>
                  </button>
                         <button onClick={()=>{OnDetailes(product)}}
                           className='flex items-center bg-gradient-to-tr from-gray-200 to-gray-300 rounded-full text-center px-3 py-1 text-black my-1'>
                  <AiFillCaretRight  className='mx-1'/>
                Details</button>
           </div>
        
        </div>
         )
     }) 
  } 
  
  </div>
   <div className='w-1/4 p-2'>
    
     <h1 className='text-xl font-semibold '>SubTotal <span> ({dataIncart.length} item)</span></h1>
     <h2 className=' text-orange-600 text-xl font-bold m-1'>{total}<span>$$</span></h2>
      <button  onClick={()=>{OnBuy()}}
         className=' w-full text-center bg-yellow-500 rounded-xl  px-3 py-1 text-black'>
                 Buy Now</button>
   </div>
    </div>
    </div>
  )
 }
 
 export default CardItems
 