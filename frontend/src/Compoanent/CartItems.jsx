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
    <div className='max-w-[1640px] mx-auto p-4 mt-10'>
      <NavBar />
      <div className='max-w-[1640px] mx-auto flex flex-row '>
        <div className=' grid lg:grid-cols-3 md:grid-cols-2 gap-6 w-full'>

          {dataIncart.map((product, i) => {
            return (
              <div key={i} className='rounded-lg shadow-lg border hover:scale-105 duration-300 bg-emerald-800 '>
                <img src={product.image} alt=''
                  className='rounded-lg  w-full h-[250px]' />
                <div className='px-1'>
                  <h2 className=' text-2xl font-light'>{product.title}</h2>
                  <h2 className='text-xl font-bold text-orange-600'> {product.price}<span> $$</span></h2>
                </div>
                <div className='flex flex-row justify-between mx-5'>
                  <button onClick={() => { onDeletFromCart(product) }}
                    className='flex items-center rounded-full text-center px-3 py-1 text-black my-1'>
                    <AiFillDelete size={30} className='mx-1' />
                  </button>
                  <button onClick={() => { OnDetailes(product) }}
                    className='flex items-center bg-gradient-to-tr from-gray-200 to-gray-300 rounded-full text-center px-3 py-1 text-black my-1'>
                    <AiFillCaretRight size={25} className='mx-1' />
                    Details</button>
                </div>

              </div>
            )
          })
          }

        </div>
        <div className='w-1/4 p-2'>

          <h1 className='text-xl font-semibold '>SubTotal <span> ({dataIncart.length} item)</span></h1>
          <h2 className=' text-orange-600 text-xl font-bold m-1'>{total}<span>$$</span></h2>
          <button onClick={() => { OnBuy() }}
            className=' w-full text-center bg-yellow-500 rounded-xl  px-3 py-1 text-black hover:bg-yellow-600'>
            Buy Now</button>
        </div>
      </div>
    </div>
  )
}

export default CardItems
