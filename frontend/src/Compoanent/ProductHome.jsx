import React, { useEffect, useState } from 'react'
import { BsFillCartFill } from "react-icons/bs"
import { AiFillCaretRight } from "react-icons/ai"
import { products } from "../data/data"
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { EcoState } from '../Context/EcoProvider'
import axios from 'axios'
import { getProductRoute, AddcardRoute } from '../RoutersApi/ApiRoutes'

function ProductHome() {
  const { searchdata, setProductDetails, setAllProduct, userToken } = EcoState()
  const navigate = useNavigate();

  let ls;
  const toastOptions = {
    position: "bottom-right",
    autoClose: 500,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  };
  const config = {
    headers: {
      Authorization: `Bearer ${userToken}`,
    }
  }

  useEffect(() => {
    const getPrs = async () => {
      try {
        const res = await axios.get(getProductRoute);
        setAllProduct(res.data.products);
        console.log(res.data.products)
      } catch (err) {
        console.log(err);
      }
    }
    getPrs();
  }, []);


  const OnDetailes = (product) => {
    setProductDetails(product);
    navigate("/details");
  }

  const AddToCart = async (product) => {

    if (userToken) {
      try {

        const res = await axios.post(AddcardRoute, { product: product._id, quantity: 1 },
          config);

        console.log("To add to card ", res);
        if (res.status = 200) {
          toast.success("Add to cart successfuly ", toastOptions);
        }

      } catch (err) {
        console.log(err);
      }
    } else {
      navigate('/login');
    }

  }



  return (
    <div className='max-w-[1640px] mx-auto p-4'>
      <div className=' grid lg:grid-cols-4 md:grid-cols-2 gap-6'>

        {searchdata.map((product, i) => {
          return (
            <div key={i} className='rounded-lg shadow-lg border hover:scale-105 duration-300 '>
              <img src={product.image} alt=''
                className='rounded-lg  w-full h-[250px] ' />
              <div className='px-1'>
                <h2 className=' text-xl font-light font-semibold'>{product.title}</h2>
                <h2 className='text-xl font-bold text-orange-600'> {product.price}<span> $$</span></h2>
              </div>
              <div className='flex flex-col p-2 justify-end'>
                <button onClick={() => { AddToCart(product) }}
                  className='flex items-center  bg-gray-300 hover:bg-gray-400  rounded-full text-center px-3 py-1 text-black my-1 font-semibold'>
                  <BsFillCartFill className='mx-1' />
                  Add to cart</button>
                <button onClick={() => { OnDetailes(product) }}
                  className='flex items-center  bg-gray-300 hover:bg-gray-400 rounded-full text-center px-3 py-1 text-black my-1 hover'>
                  <AiFillCaretRight className='mx-1' />
                  Details</button>

              </div>

            </div>
          )
        })

        }



      </div>
      {/**Another card */}
    </div>
  )
}

export default ProductHome 
