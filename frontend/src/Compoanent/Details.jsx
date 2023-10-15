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
          <h2 className=' text-3xl font-bold text-gray-950 '>{product.name}</h2>
          <h4 className=' p-5 text-xl font-bold'>
                  Roll over image to zoom in
                Tongue Scraper (2 Pack with Travel Case),
              Tongue Cleaner for Reduce Bad Breath, Stainless Steel Tongue Scrapers for Adults & Kids, 100% Metal Tongue Scrubber Set for Oral Care</h4>
          <h1 className=' text-xl text-orange-600 font-bold px-5'>{product.price} <span>$$</span></h1>
          <div className='items-center flex flex-row '>
               <button onClick={()=>{OnBuy()}}
                className='flex items-center bg-orange-500 rounded-full text-center px-3 py-1 text-black m-5'>
                  
                 Buy Now</button>
                <input  type="number" 
              className="outline-none bg-gray-100 rounded text-center text-xl" max={10}   min={1} 
               value={quantity}
               onChange={handleQuantityChange} 
      />
                 </div>
              
          <p className='text-gray-900 p-2'>Instantly Get Rid Of Bad Breath: Our metal tongue scraper are the solution you've been looking for to get rid of bad breath. No more ineffective brushing and flossing - our tongue scrappers clear out the white, coated layer on your tongue and maintain better oral hygiene. Instantly freshens your breath and eliminates any bad taste in your mouth.
<br/>✅Flexible U Shaped Curve: Our medical grade tongue scrapers designed with U shaped, Perfectly curved design for all mouths and no scratching. It has two symmetric handles for good grip and an anti-gagging ridge for back-of-the-mouth cleaning. Perfectly designed tongue scraper for adults & kids.
<br/>✅Premium Materials: Our tounge scraper made of 100% stainless steel materials, rust-proof, durable and long lasting usages. Tongue scrapper with 304 stainless steel material is also easier to clean, simply rinse with water and put them in the brushing cup. So, why waste money on cheap plastic tongue cleaner, get your first stainless steel tongue cleaner and go have a healthier life and confident social life!
<br/>✅Easy To Operate: Open your mouth and put the tongue scraper cleaner on your tongue. Pull the tongue cleaner forward and remove all of the build-up. Rinse it and repeat the procedure. Continue until all of the build-up from your tongue have been removed; Rinse the tonuge scraper again and enjoy freshness in your breath.
<br/>✅Travel Friendly: You will not only get two tongue scrapers（limpiador de lengua）, we will also send you two beautiful travel cases, easy to carry on your trip. Hope tongue scraping can become an essential part of your life. If you aren't happy with our tounge scraper for any reason, reach out to us to receive a refund or replacement.</p>
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
