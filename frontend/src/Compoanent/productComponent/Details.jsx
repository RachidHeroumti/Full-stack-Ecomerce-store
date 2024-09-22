import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BsFillCartFill } from "react-icons/bs"
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'
import { AddcardRoute } from '../../RoutersApi/ApiRoutes'

import ProductHome from './ProductHome'
import { useWindowSize } from '@react-hook/window-size';
import CardItem from './CardItem';
import { IoMdPerson } from "react-icons/io";
import { CiStar } from "react-icons/ci";
import { EcoState } from '../../Context/EcoProvider';



function Details({ product }) {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const [imagePr, setImagePr] = useState(product.image)
  const { searchdata, setAllProduct,dataToBay } = EcoState()
  const { userToken } = EcoState();
  const [screenH, screenW] = useWindowSize();
  const [isfixed, setIsFixed] = useState(false);
  const toastOptions = {
    position: "bottom-right",
    autoClose: 500,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  };

  const AddToCart = async () => {
  
    if (userToken) {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      }
      try {
        const res = await axios.post(AddcardRoute, config);
        if (res.data._id) {
          toast.success("Add to cart successfuly ", toastOptions);
        }

      } catch (err) {
        console.log(err);
      }
    }else{
      navigate("/login");
    }

  }

  const handleQuantityChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    setQuantity(newValue);
  };

  useEffect(() => {
    if (screenH <= 815 && screenW <= 940) {
      setIsFixed(true);
    }
  }, []);

  useEffect(() => {

    const getPrs = async () => {
      try {
        const res = await axios.get(getProductRoute);
        if(res.data.products){
          setAllProduct(res.data.products);
        }
      
      } catch (err) {
        console.log(err);
      }
    }
    getPrs();
  }, []);


  return (
    <div className=' max-w-[1640] md:p-12 p-2  mt-10  '>
 
      <div className=' flex bg-gray-50  p-4'>
        <div className='md:flex'>
          <div className='lg:w-[500px] flex   flex-col w-full sm:w-full items-center sm:items-start'>
            <img src={imagePr} alt='img'
              className='max-w-[350px] sm:h-[200px]  md:h-[400px] w-full h-[100px] object-cover' />
            <div className='grid grid-cols-4 gap-2 max-w-[350px]'>
              <img src={product.images[0]} alt=''
                onClick={() => { setImagePr(product.images[0]) }}
                className=' h-[60px] w-[50px]  sm:h-[125px] sm:w-[100px] ' />
              <img src={product.images[1]} alt=''
                onClick={() => { setImagePr(product.images[1]) }}
                className='h-[60px] w-[50px]   sm:h-[125px] sm:w-[100px] ' />
              <img src={product.images[2]} alt=''
                onClick={() => { setImagePr(product.images[2]) }}
                className='h-[60px] w-[50px]   sm:h-[125px] sm:w-[100px]' />
              <img src={product.images[3]} alt=''
                onClick={() => { setImagePr(product.images[3]) }}
                className='h-[60px] w-[50px]   sm:h-[125px] sm:w-[100px] ' />
            </div>
          </div>

          <div className='w-full p-4 sm:flex '>
            <div className=''>
              <h2 className=' sm:text-2xl font-bold text-gray-950 pb-2 px-2 '>{product.title}</h2>
              <h1 className=' sm:text-2xl p-1 text-orange-800 font-bold px-5'>{product.price} <span>$$</span></h1>
              <p className='text-gray-900 p-2 text-xl tracking-wider pe-12'>
                {product.description}
              </p>
              <div className='sm:text-xl text-gray-700 '>
                <p className='py-2'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro tenetur,
                  quas delectus ex quis veniam consequatur aut quasi in quo exercitationem blanditiis.
                  Modi quam neque similique ad harum tenetur illo.
                </p>
                <p className='py-2'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi porro tempore necessitatibus.
                  Quaerat, aut? Velit,
                  harum tempore id odit cumque dolore nisi at dignissimos tenetur quod officiis necessitatibus
                  labore sapiente!
                </p>
                <p className='py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quia impedit sint debitis eos error porro eaque perspiciatis nobis iure maxime pariatur minima deleniti,
                  quos, vero blanditiis officiis delectus? Harum, doloremque!
                </p>
              </div>

            </div>
          </div>
        </div>


        <div className={`w-full sm:w-[30%] ${isfixed ? "fixed bottom-0 start-0 end-0 p-3 first-line:" : ""} 
          flex flex-col space-x-1 bg-red-100 space-y-1`}>
          <div className=' flex flex-row sm:flex-col justify-between items-center' >
            <h1 className=' md:text-xl text-gray-700 sm:p-1'>Quantity </h1>
            <input type="number"
              className="outline-none bg-gray-100 rounded text-center sm:text-xl my-1
                    font-bold sm:py-2 sm:px-3" max={10} min={1}
              value={quantity}
              onChange={handleQuantityChange}
            />

            <h1 className=' sm:text-xl  my-2'>- 49 Pieces available</h1>
          </div>


          <button onClick={() => { AddToCart() }}
            className='flex items-center justify-center text-xl sm:text-3xl my-1 border border-red-500
                     font-bold bg-white hover:text-red-500  text-red-700 rounded-lg text-center  '>
            <BsFillCartFill className='mx-1 ' />
            +</button>



        </div>

      </div>
      <div className='  p-5'>
        <h1 className=' text-2xl font-semibold text-yellow-700 p-5'>Reviwes </h1>
         <div className=' text-xl font-normal text-black'>
          <div className=' flex items-center'>
          <IoMdPerson size={25} className='' />
          <span className=' px-3'>@username</span>
           <div className=' flex items-center space-x-1'>
           <CiStar size={25} className=' text-yellow-500' />
           <CiStar size={25} className=' text-yellow-500' />
           <CiStar size={25} className=' text-yellow-500' />
           <CiStar size={25} className=' text-yellow-500' />
           <CiStar size={25} className=' text-yellow-500' />
           </div>
          </div>
 
           <p className='p-5  text-gray-800 '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            quas incidunt delectus .
            </p>
         </div>


      </div>
      <div className='p-5'>
      <h1 className=' text-3xl font-semibold text-center m-5  text-red-950'>See More Product From same category  </h1>
      </div>
    
      <CardItem products={searchdata}/>
      <ToastContainer />
    </div>
  )
}

export default Details
