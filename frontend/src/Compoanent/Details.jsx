import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BsFillCartFill } from "react-icons/bs"
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'
import { AddcardRoute } from '../RoutersApi/ApiRoutes'
import { EcoState } from '../Context/EcoProvider';

function Details({ product }) {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const [imagePr, setImagePr] = useState(product.image)
  const { setDataToBay, dataToBay } = EcoState()
  const { userToken } = EcoState();
  const toastOptions = {
    position: "bottom-right",
    autoClose: 500,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  };
  const AddToCart = async () => {
    const token = localStorage.getItem('token');

    if (token) {
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
    }

  }

  //Event handler to update the quantity when the input changes
  const handleQuantityChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    setQuantity(newValue);
  };

  const OnBuy = (pr) => {
    if (!userToken) {
      navigate('/login');
      return true;
    }
    const arr = [];
    arr.push(pr);
    setDataToBay(arr);
    console.log(dataToBay);
    navigate("/order");
  };



  return (
    <div className=' max-w-[1640] md:p-12 p-2 flex justify-center  '>
      <div className=' md:flex   bg-gray-50  p-4'>
        <div className='lg:w-[500px] flex   flex-col'>
          <img src={imagePr} alt=''
            className='max-w-[350px] h-[400px] object-cover' />
          <div className='grid grid-cols-4 gap-2 w-[350px]'>
            <img src={product.images[0]} alt=''
              onClick={() => { setImagePr(product.images[0]) }}
              className='h-[125px] w-[100px] px-1' />
            <img src={product.images[1]} alt=''
              onClick={() => { setImagePr(product.images[1]) }}
              className='h-[125px] w-[100px] px-1' />
            <img src={product.images[2]} alt=''
              onClick={() => { setImagePr(product.images[2]) }}
              className='h-[125px] w-[100px] px-1' />
            <img src={product.images[3]} alt=''
              onClick={() => { setImagePr(product.images[3]) }}
              className='h-[125px] w-[100px] px-1' />
          </div>
        </div>

        <div className='w-full p-4 sm:flex'>

          <div className='w-[70%]'>
            <h2 className=' sm:text-2xl font-bold text-gray-950 pb-2 px-2 '>{product.title}</h2>
            <h1 className=' sm:text-2xl p-1 text-orange-600 font-bold px-5'>{product.price} <span>$$</span></h1>
            <p className='text-gray-900 p-2 text-2xl tracking-wider pe-12'>
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

          <div className=' sm:w-[30%] flex flex-col p-2 border rounded-sm m-2 '>
            <h1 className=' sm:text-2xl text-xl text-gray-700 p-1'>Quantity </h1>
            <input type="number"
              className="outline-none bg-gray-100 rounded text-center text-xl my-1
                    font-bold py-2 px-3" max={10} min={1}
              value={quantity}
              onChange={handleQuantityChange}
            />

            <h1 className='py-2 sm:text-xl my-2'>- 7697 Pieces available</h1>

            <button onClick={() => { OnBuy(product) }}
              className='  bg-orange-500 hover:bg-orange-600 rounded-lg text-center  py-2 text-white  text-xl font-black my-1'>
              Buy Now</button>

            <button onClick={() => { AddToCart() }}
              className='flex items-center justify-center text-3xl p-1 my-1 border border-orange-500
                     font-bold bg-white hover:text-orange-500  text-orange-700 rounded-lg text-center  '>
              <BsFillCartFill className='mx-1 ' />
              +</button>

          </div>



        </div>

      </div>

      <ToastContainer />
    </div>
  )
}

export default Details
