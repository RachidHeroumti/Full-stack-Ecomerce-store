import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {toast ,ToastContainer} from 'react-toastify'

function Register() {
  const[name,setName]=useState("") ;
  const[email,setEmail] =useState("");
  const[password ,setPassword] =useState("") ;
 
  const toastOption={
    position: "bottom-right",
    autoClose: 3000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const OnRegister=()=>{
    //
    if(!name||!email||!password){
       toast.error("Some fields is Empty !",toastOption) ;
       return ;
    }
    if(name.length<=3){
       toast.error("Password must be longer!",toastOption) ;
       return ;
     }
   if(password.length<6){
   toast.error("Password must be longer !",toastOption) ;
     }

     //
     
  }
  return (
    <div className='max-w-[1640] p-4 flex justify-center py-12'>
       <div className='w-[400px] p-5 bg-gray-50 shadow-lg rounded-md '>
          <h1 className='text-2xl font-semibold text-gray-900 p-2'> Register</h1>
          <div>
           <input  onChange={(e)=>{setName(e.target.value)}}
                   value={name}
            className='bg-gray-200 w-full outline-none px-3 py-1 rounded-md m-1'
            type='text' 
           placeholder='Name' />
           <input  onChange={(e)=>{setEmail(e.target.value)}}
                   value={email}
           className='bg-gray-200 w-full outline-none px-3 py-1 rounded-md m-1'
            type='email' placeholder='Email' />
           <input  onChange={(e)=>{setPassword(e.target.value)}}
                   value={password}
            className='bg-gray-200 w-full outline-none px-3 py-1 rounded-md m-1'
            type='password' placeholder='Password' />
         
         
    <button onClick={()=>{OnRegister()}}
        className='rounded-full w-full text-center font-bold mt-2 bg-gray-400 hover:bg-gray-500 hover:text-white  p-1'>
            Register
           </button>
           <div className='flex items-center justify-end py-2'>
      <span>
             Already have an account ? <Link to="/login" 
                 className=' px-2 text-cyan-900  font-bold'>Login</Link>
          </span>
           </div>

          </div>
       </div>
       <ToastContainer/>
    </div>
  )
}

export default Register
