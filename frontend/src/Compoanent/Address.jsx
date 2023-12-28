import React, { useEffect, useState } from 'react'
import { countyCode } from '../data/data'
import { useNavigate } from 'react-router-dom'
import {ToastContainer,toast} from "react-toastify"
import {EcoState} from "../Context/EcoProvider"
import axios from 'axios'
import { addAddressRoute } from '../RoutersApi/ApiRoutes'
import Cookies from 'js-cookie'

function Address() {
  const{setAddress,userToken} =EcoState()
 const[countryName,setCountryName] =useState("Morocco");
  const[countryCode,setCountryCode] =useState("+212");
 const[contactName,setContactName] =useState("");
 const[mobile,setMobile] =useState();
  const[city,setCity] =useState("");
  const[street,setStreet] =useState("");
const[province,setProvince] =useState("");
const[zip,setZip] =useState("");
const[asdefAddress,setAsdefAdress]=useState(true) ;

  const navigate=useNavigate();

     const toastOptions = {
    position: "bottom-right",
    autoClose: 3000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };


  useEffect(()=>{
    const token =Cookies.get('token')
     if(!userToken&&!token){
      navigate("/login");
     }
  },[])

  const onSave=async()=>{
    if(!countryName||!contactName||!mobile||!city||!street||!province||!zip){ 
       toast.error("some fields are empty !",toastOptions)
    }
    else {
       const config={
           headers:{
            Authorization :`Bearer ${userToken}`,
           }}
       try{
        const res= await axios.post(addAddressRoute,{
          contactName,country:countryName,
          mobile,city,street,province,zipcode:zip,asdefAddress
        },config);
        if(res.data){
          setAddress(res.data.address);
        navigate('/Order');
        }
       }catch(err){
        console.log(err);
       }

    }

     
    }

const setCodeCountry = (name) => {
  let code ="";
    countyCode.filter((it) => {
      if (it.name === name) {
        code=it.code ;
        setCountryCode(code);
      }
    })
  
};



  return (

    <div className='max-w-[1640px] p-5'>

      <div className=''>
        <h1 className=' md:text-3xl text-xl font-bold py-6'>Shipping Address</h1>
         <div className=' bg-gray-50 shadow-sm p-4'>
          {/* country  */}
           <h1 className='text-xl font-bold py-3 mt-3'>Country/Region</h1>

           <select className='px-10 py-2 rounded border border-gray-400 outline-none' 
              
             value={countryName}
                onChange={(e)=>{setCountryName(e.target.value) ; setCodeCountry(e.target.value)}}
           >

          { countyCode.map((country,i)=>{
            return(
            <option key={i} value={country.name}>
             {country.name}
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
              <input className=' text-center py-2 outline-none rounded-lg me-2 
                 bg-gray-200 my-1' type='text' placeholder='Country Code (+XXX)' 
                  value={countryCode}
                  readOnly
                  />
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
        value={asdefAddress}
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
