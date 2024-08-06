import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { loginRoute } from '../RoutersApi/ApiRoutes'
import axios from 'axios'
import cookies from 'js-cookie'
import { EcoState } from '../Context/EcoProvider'

import { IoArrowBackCircle } from "react-icons/io5";


function Login() {
  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("test123");
  const navigate = useNavigate();
  const { setUserToken } = EcoState()

  const[loginState,setLoginState]=useState("Log in");
  const toastOption = {
    position: "bottom-right",
    autoClose: 3000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const OnLogin = async () => {
    //
    if (!email || !password) {
      toast.error("Some fields is Empty !", toastOption);
      return;
    }
    //check email 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Check if the entered email matches the email format
    const isValidEmail = emailRegex.test(email);
    if (!isValidEmail) {
      toast.error("Please enter a valid email!", toastOption);
      return;
    }
    try {
      setLoginState("Wait ...")
      const res = await axios.post(loginRoute, { email, password });
      if (res.data.id) {
        const token = res.data.token;
        cookies.set('token', token, { expires: 30 });
        setUserToken(token);
        navigate('/');
      }

    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='max-w-[1640] p-4 flex justify-center py-12'>
      <div className='w-[400px] p-5 bg-gray-50 shadow-lg rounded-md '>
        <a href='/' className=' p-1'><IoArrowBackCircle size={25} className=' text-red-500'/></a>
        <h1 className=' text-2xl font-bold text-red-600 '> Log in</h1>
        <div>
          <input onChange={(e) => { setEmail(e.target.value) }}
            value={email}
            className='bg-gray-200 w-full outline-none px-3 py-1 rounded-md m-1'
            type='email' placeholder='Email' />

          <input onChange={(e) => { setPassword(e.target.value) }}
            value={password}
            className='bg-gray-200 w-full outline-none px-3 py-1 rounded-md m-1'
            type='password' placeholder='Password' />

          <button onClick={() => { OnLogin() }}
            className='rounded-full w-full text-center font-bold mt-2 bg-red-500 hover:bg-red-600 text-white  p-1'>
            {loginState}
          </button>
          <div className='flex items-center justify-end py-2'>
            <span>
              you don't have account  ? <Link to="/register"
                className=' px-2 text-red-600  font-bold'>Register</Link>
            </span>
          </div>

        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Login
