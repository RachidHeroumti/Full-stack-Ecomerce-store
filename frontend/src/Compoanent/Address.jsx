import React, { useState } from 'react'
import { countries } from '../data/data'
import Order from './Order'
import { useNavigate } from 'react-router-dom'
import {ToastContainer,toast} from "react-toastify"
import {EcoState} from "../Context/EcoProvider"

function Address() {
  const{ setAddress} =EcoState()
 const[countryName,setCountryName] =useState("Morocco");
 const[contactName,setContactName] =useState("");
 const[mobile,setMobile] =useState();
  const[city,setCity] =useState("");
  const[street,setStreet] =useState("");
const[province,setProvince] =useState("");
const[zip,setZip] =useState("");
const[asdefAddress,setAsdefAdress]=useState(true) ;

     const toastOptions = {
    position: "bottom-right",
    autoClose: 3000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

   const navigate=useNavigate();
  const onSave=()=>{
    if(!countryName||!contactName||!mobile||!city||!street||!province||!zip||!asdefAddress){
          console.log(countryName,contactName,mobile,city,street,province,zip,asdefAddress);
       toast.error("some fields are empty !",toastOptions)
    
    }
    else {
    console.log(countryName,contactName,mobile,city,street,province,zip,asdefAddress)
       const Address={
        "country name":countryName ,
        "contactName":contactName ,
        "mobile" : mobile ,
        "street" : street ,
        "province" :province ,
        "zip" : zip,
       }
       setAddress(Address) ;
       localStorage.setItem("ad","ad");
       navigate('/Order');
    }

     
    }

   


  return (

    <div className='max-w-[1640px] p-5'>

      <div className=''>
        <h1 className=' md:text-3xl text-xl font-bold py-6'>Shipping Address</h1>
         <div className=' bg-gray-50 shadow-sm p-4'>
          {/* country  */}
           <h1 className='text-xl font-bold py-3 mt-3'>Country/Region</h1>

           <select className='px-10 py-2 rounded border border-gray-400 outline-none' 
              
             value={countryName}
                onChange={(e)=>{setCountryName(e.target.value)}}
           >

          { countries.map((country,i)=>{
            return(
            <option key={i} value={country}>
             {country}
             </option>)
           }) 
             }
           </select>
         </div>
        {/* Personal info */}
        <div className='bg-gray-50 shadow-sm p-4 mt-3'>
          <h1 className='text-xl font-bold py-3'>Personal Information</h1>
           <div className=''>
             <input className='px-5 py-2 outline-none rounded-lg m-2
                bg-gray-200' type='text' placeholder='Contact Name *'
                value={contactName}
                onChange={(e)=>{setContactName(e.target.value)}}
                />
             <div className='p-2 flex lg:flex-row flex-col'>
              <input className='px-2 py-2 outline-none rounded-lg me-2  bg-gray-200 my-1' type='text' placeholder='Country Code (+XXX)' />
              <input className='px-5 py-2 outline-none rounded-lg  
               bg-gray-200 my-1' type='text' placeholder='Mobile Number *'
                value={mobile}
                onChange={(e)=>{setMobile(e.target.value)}} />
             </div>
           </div>
        </div>
        {/* Address */}
        <div className='bg-gray-50 shadow-sm p-4 mt-3  flex lg:flex-row flex-col'>
          <input className='bg-gray-200 outline-none px-5 py-2 rounded-lg m-2'
            type='text' placeholder='Street, house/apprtement *'
             value={street}
                onChange={(e)=>{setStreet(e.target.value)}}/>
          <input className='bg-gray-200 outline-none px-5 py-2 rounded-lg m-2'
           type='text' placeholder='Province*'
            value={province}
            onChange={(e)=>{setProvince(e.target.value)}}/>
          <input className='bg-gray-200 outline-none px-5 py-2 rounded-lg m-2'
             type='text' placeholder='City*'
               value={city}
               onChange={(e)=>{setCity(e.target.value)}}/>
          <input className='bg-gray-200 outline-none px-5 py-2 rounded-lg m-2'
             type='text' placeholder='ZIP code*'
              value={zip}
              onChange={(e)=>{setZip(e.target.value)}}/>
        </div>

        <div className='bg-gray-50 shadow-sm px-4 py-2 flex justify-center flex-col'>
          <div className='p-3 flex items-center'>
        <label  className=' font-bold text-xl' >Set as default shipping address</label> 
       <input
        type="checkbox"
        className="mx-2 w-6 h-6 text-indigo-600"
        id="myCheckbox"
        name="myCheckbox"
        
        onChange={(e)=>{setAsdefAdress(e.target.value)}}
      />
          </div>
      <div className='p-3  '>
          <button  onClick={()=>{onSave()}}
             className='rounded-lg bg-gray-400 font-bold py-1 px-5 w-full hover:bg-slate-500'>Save</button>
        </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  )
}

export default Address
