import React from 'react'

import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import { BsFillCartFill } from "react-icons/bs"
import { AiFillCaretRight } from "react-icons/ai"
import axios from 'axios';

import { EcoState } from '../../Context/EcoProvider';
import { AddcardRoute } from '../../RoutersApi/ApiRoutes';


function CardItem({products,isLoading}) {

    const {  setProductDetails , userToken } = EcoState()
    const navigate = useNavigate();

    const OnDetailes = (product) => {
        console.log(product);
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
            const id = product._id;

            localStorage.setItem(id,JSON.stringify(product));
            toast.success("Added to cart successfully", toastOptions);
        }
    
      }

      
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
  if(products.length===0&&isLoading=="Loading ..."){
    return <h1 className=' text-xl text-black text-center font-semibold'>{isLoading}</h1>
  }
  return (
    <div className=' grid lg:grid-cols-4 md:grid-cols-2 gap-6' id='shop'>

        {products &&products.map((product, i) => {
          return (
            <div key={product._id} className='rounded-lg shadow-lg  hover:scale-105 duration-300 bg-white 
             border text-gray-900  '>
              <img src={product.image} alt=''
                className='rounded-lg  w-full h-[250px] ' />
              <div className='p-3 text-gray-900'>
                <h2 className='text-xl  font-medium h-[40px] '>{product.title}</h2>
                <h2 className='text-xl  font-semibold text-orange-700'> {product.price}<span> $$</span></h2>
                <p className=" text-gray-600" >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ut id iure blanditiis, quasi eos porro, natus ex omnis enim,
                </p>
              </div>
              <div className=' p-2 w-full h-full items-end '>
                <div className=" flex  text-gray-900 text-xl w-full   space-x-2  bottom-0 left-0">
                  <button onClick={() => { OnDetailes(product) }}
                    className='flex items-center border hover:bg-red-400 hover:text-white  w-full border-gray-200
                     rounded
                    text-center px-3 py-1  font-semibold  '>
                    <AiFillCaretRight className='mx-1' />
                    Details</button>

                  <button onClick={() => { AddToCart(product) }}
                    className='flex items-center border hover:bg-red-400 hover:text-white  w-full border-gray-200
                     rounded
                    text-center px-3 py-1  font-semibold'>
                    {/* { <BsFillCartFill size={30} className='mx-1 text-yellow-400' />} */}
                    Add to Cart
                  </button>
                </div>
              </div>

            </div>
          )
        })
        }
      </div>
  )
}

export default CardItem
