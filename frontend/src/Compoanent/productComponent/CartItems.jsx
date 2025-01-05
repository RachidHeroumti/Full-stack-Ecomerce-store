import React, { useEffect, useState } from 'react'
import { EcoState } from '../../Context/EcoProvider';
import { useNavigate } from 'react-router-dom';
import { RiDeleteBin5Line } from "react-icons/ri";
import axios from 'axios'
import { deletFromCardRoute, getcardRoute } from '../../RoutersApi/ApiRoutes'

function CardItems() {
  const { setProductDetails, userToken, setDataToBay } = EcoState();
  const [total, setTotal] = useState(0);
  const [dataIncart, setDataIncart] = useState([]);
    const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();





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
      }else{
        var archive = [],
    keys = Object.keys(localStorage),
    i = 0, key;

for (; key = keys[i]; i++) {
    const item = localStorage.getItem(key);
    if (item) {
        archive.push(JSON.parse(item));
    }
   }
   setDataIncart(archive);
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
  const handleQuantityChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    setQuantity(newValue);
  };

  // for buy
  const OnBuy = () => {
    setDataToBay(dataIncart);
    navigate("/Address");
  }

  return (
    <div className='justify-between gap-10  flex flex-col md:flex-row p-1 container font-poppins h-full '>
      <div className='md:w-2/3 w-full space-y-2 h-full'>
        {dataIncart.map((product, i) => {
          return (

            <div key={product._id} className=' flex my-1  gap-4 border-b p-5  text-gray-800 '>
              <div className=''>
              <img src={product.image} alt=''
                className=' h-[80px] w-[80px] '
                onClick={() => { OnDetailes(product) }} />
              </div>
              
              <div className=' space-y-3'>
                <h2 className=' font-medium capitalize leading-3'>{product.title}</h2>
                <h2 className=' font-semibold '> {product.price}<span> $$</span></h2>

                <div className='flex gap-2 '>
                <div className="flex items-center border justify-between border-gray-500 text-black rounded-full overflow-hidden ">
                  {/* Decrement Button */}
                  <button
                    onClick={() =>
                      handleQuantityChange({
                        target: { value: Math.max(1, quantity - 1) },
                      })
                    }
                    className=" text-gray-700  px-2 transition-all"
                  >
                    -
                  </button>

                  {/* Quantity Input */}
                  <input
                    type="text"
                    className="w-16 outline-none text-center text-xl  border-t border-b border-gray-200"
                    max={10}
                    min={1}
                    value={quantity}
                    onChange={handleQuantityChange}
                  />

                  <button
                    onClick={() =>
                      handleQuantityChange({
                        target: { value: Math.min(10, quantity + 1) },
                      })
                    }
                    className=" text-gray-700  px-2  transition-all"
                  >
                    +
                  </button>
                </div>

                  <button onClick={() => { onDeletFromCart(product) }}
                    className='flex items-center rounded-full text-center 
                    
                     text-gray-800 '>
                    <RiDeleteBin5Line size={25} className='' />
                  </button>
                </div>

              </div>


            </div>

          )
        })
        }

      </div>


      <div className='md:w-1/3 w-full flex flex-col pt-5'>
      <div className=' border  p-3 md:p-8 sticky'> 
        <h2 className=' text-xl font-semibold pb-5 border-b mb-5 '>Order summary</h2>
        <p className='mb-5'>Tax included, shipping and discounts calculated at checkout.
        </p>
      <div className=' space-x-3  p-3 w-full gap-2 flex  justify-between font-semibold '>
          <h1 className=''>SubTotal <span> ({dataIncart.length} item)</span></h1>
          <h2 className=' '>{total}<span> $$</span></h2>
        </div>

        <button onClick={() => { OnBuy() }}
          className=' w-full text-2xl font-semibold text-center bg-orange-600 rounded-xl  px-3 py-1  text-white
             hover:bg-orange-500 '>
          Buy Now</button>
      </div>
       
      </div>
    </div>

  )
}

export default CardItems
