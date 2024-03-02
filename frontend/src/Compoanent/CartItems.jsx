import React, { useEffect, useState } from 'react'
import { EcoState } from '../Context/EcoProvider';
import { useNavigate } from 'react-router-dom';
import { BsFillCartFill } from "react-icons/bs"
import { AiFillCaretRight, AiFillDelete } from "react-icons/ai"
import NavBar from './NavBar';
import axios from 'axios'
import { deletFromCardRoute, getcardRoute } from '../RoutersApi/ApiRoutes'
import cookies from 'js-cookie'

function CardItems() {
  const { setProductDetails, userToken, setDataToBay } = EcoState();
  const [total, setTotal] = useState(0);
  const [dataIncart, setDataIncart] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    const token = cookies.get('token');
    if (!userToken && !token) {
      navigate('/login');
    }
  }, [])
  //get products 
  useEffect(() => {
    const getDataCard = async () => {
      const config = {
        headers: {
          Authorization: `Bearer ${userToken}`,
        }
      }
      if (userToken) {
        try {
          const res = await axios.get(getcardRoute, config);

          if (res.data) {
            const products = res.data[0].products;
            const productIds = products.map((ps) => ps.product);
            setDataIncart(productIds);
          }
        } catch (err) {
          console.log(err);
        }
      }
    }
    getDataCard();
  }, []);

  const OnDetailes = (product) => {
    setProductDetails(product);
    navigate("/details");
  }
  const addToTotal = () => {
    let t = 0;
    dataIncart.map((item, i) => {
      const price = parseFloat(item.price);
      if (!isNaN(price)) {
        t += price;
      }
    })
    setTotal(t.toFixed(2));
  }
  useEffect(() => {
    if (dataIncart)
      addToTotal();
  }, [dataIncart]);



  const onDeletFromCart = (i) => {

    const config = {
      headers: {
        Authorization: `Bearer ${userToken}`,
      }
    }
    const productsCopy = dataIncart;
    const deletedItem = productsCopy.splice(i + 1, 0);

    const res = axios.post(`${deletFromCardRoute}/${i._id}`, config);
    console.log(res);
    setDataIncart(
      productsCopy.filter((item) => {
        return item.title != i.title;
      })
    );
  }

  // for buy
  const OnBuy = () => {
    setDataToBay(dataIncart);
    navigate("/Address");
  }

  return (
    <div className='max-w-[1640px] mx-auto p-4   '>
      <div className='max-w-[1640px] mx-auto  mt-5 space-x-1'>


        {dataIncart.map((product, i) => {
          return (

            <div key={i} className=' flex my-1 bg-gray-100 p-2'>
              <img src={product.image} alt=''
                className='rounded-lg h-[150px] w-[100px] ' />
              <div className=' p-2'>
                <h2 className=' text-2xl font-bold py-1 '>{product.title}</h2>
                <h2 className=' text-2xl font-extrabold p-1 text-orange-700'> {product.price}<span> $$</span></h2>

                <div className='flex text-gray-900 p-2'>
                  <button onClick={() => { OnDetailes(product) }}
                    className='flex items-center  bg-orange-400 sm:text-xl
                       hover:bg-orange-500 rounded-full text-center  sm:px-3 p-1  my-1'>
                    <AiFillCaretRight size={25} className='mx-1' />
                    Details</button>

                  <button onClick={() => { onDeletFromCart(product) }}
                    className='flex items-center rounded-full text-center py-1
                     hover:text-orange-500 px-2
                     text-orange-600 my-1'>
                    <AiFillDelete size={35} className='' />
                  </button>
                </div>

              </div>


            </div>

          )
        })
        }

      </div>

      <div className='p-2'>
        <h1 className='text-xl font-semibold '>SubTotal <span> ({dataIncart.length} item)</span></h1>
        <h2 className=' text-orange-700 text-2xl font-extrabold m-1'>{total}<span> $$</span></h2>
        <button onClick={() => { OnBuy() }}
          className=' w-full text-2xl font-semibold text-center bg-orange-500 rounded-xl  px-3 py-1 
             hover:bg-orange-600'>
          Buy Now</button>
      </div>
    </div>

  )
}

export default CardItems
