import React, { useEffect, useState } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { FaCcVisa, FaPaypal } from 'react-icons/fa'
import { FaCcMastercard } from 'react-icons/fa6'
import { ToastContainer, toast } from "react-toastify"
import { EcoState } from '../Context/EcoProvider'
import { useNavigate } from 'react-router-dom'


function Order({ addressInfo }) {
  const [istoPay, setIstopPay] = useState(false);
  const [tolat, setTotal] = useState(1);
  const { dataToBay, setDataToBay } = EcoState();
  const [cardN, setCardN] = useState("");
  const [cvv, setCvv] = useState("");


  const navigate = useNavigate();
  const toastOptions = {
    position: "bottom-right",
    autoClose: 3000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const OrderNow = async () => {
    console.log(cardN + "lkjf");
    if (!cardN) {
      toast.error("Please add payment information !", toastOptions);
      return;
    }
    toast.success("order succes", toastOptions);
    navigate("/")
  }
  useEffect(() => {
    console.log("data comes to buy : ", dataToBay);
  }, [dataToBay]);
  const addToTotal = () => {
    let t = 0;
    dataToBay.map((item, i) => {
      const price = parseFloat(item.price);
      if (!isNaN(price)) {
        t += price;
      }
    })
    setTotal(t);
  }

  useEffect(() => {
    addToTotal();
  }, []);

  const onDeletFromOrder = (i) => {
    console.log(i);
    const productsCopy = dataToBay;
    const deletedItem = productsCopy.splice(i + 1, 0);
    setDataToBay(
      productsCopy.filter((item) => {
        return item.title != i.title;
      })
    );
  }


  return (
    <div className='max-h-[1640] p-4 mb-12'>
      <h1 className='text-3xl font-bold p-5 flex justify-center'>Order Confirmation</h1>
      <div className='px-3 shadow-md py-2 my-5 bg-gray-100 rounderd-lg'>
        <h2 className='text-2xl'>Shopping Address</h2>
        <h3 className='text-xl text-gray-900'>{addressInfo.contactName}</h3>
        <h4 className=' text-gray-700'>+212 {addressInfo.mobile}</h4>
        <p className='text-gray-700'>{addressInfo.street}</p>
      </div>

      <div className=' bg-gray-100 m-2 p-1 rounded '>
        <h1 className='text-xl font-bold'>Payment Methods</h1>
        <h2 className='text-xl text-blue-500 cursor-pointer'
          onClick={() => { setIstopPay(true) }}
        >Select Payment Method</h2>
      </div>

      <div className='grid gap-5'>

        {dataToBay && dataToBay.map((item, i) => {
          return (<div className='rounded bg-gray-100' key={i}>
            <div className='flex flex-row p-4'>
              <img className='rounded-lg h-[150px] w-[100px] '
                src={item.image} alt='' />
              <div className='px-3'>
                <h1 className='text-xl font-semibold py-1'>{item.title} </h1>
                <h1 className='text-2xl font-bold text-orange-600 py-1'>{item.price} <span>$</span></h1>
                <div className='flex flex-row'>
                  <AiFillDelete size={25} className='mx-1' onClick={() => { onDeletFromOrder(item) }} />
                  <input type='number' defaultValue={1}
                    className=' outline-none bg-gray-200 mx-2 px-2 rounded-xl text-center' min={1} max={10} />
                </div>
              </div>
            </div>

          </div>)
        })
        }


      </div>
      <div className=' fixed bottom-0 left-0 bg-white w-full flex  p-5 justify-between flex-col md:flex-row'>
        <h1 className='text-2xl font-bold px-10 w-full'>Total  :  <span className=' text-orange-600'>{tolat} $</span></h1>
        <button className=' w-full text-center py-1 rounded-full bg-orange-500 text-white text-xl font-bold'
          onClick={() => { OrderNow() }}
        >Order Now</button>
      </div>
      <ToastContainer />
      {/** To add card */}
      {istoPay ? <div className='fixed h-screen w-full bg-black/80 top-0 left-0 z-10'>
      </div> : ""}
      {istoPay ? <div
        className='w-full h-screen z-10 fixed top-0 left-0  flex justify-center items-center'>
        <div className='w-[400px] bg-gray-200 p-5 rounded-lg'>
          <div className=' bg-white my-1 rounded-lg p-2'>
            <h1 className=' font-bold text-center'>Add a new card</h1>
            <div className='flex flex-row'>
              <FaCcVisa size={20} className='mx-2' />
              <FaCcMastercard size={20} className='mx-2' />
              <FaPaypal size={20} className='mx-2' />
            </div>
          </div>
          <input type='text' placeholder='Card Number'
            className='w-full my-1 outline-none p-2 rounded-lg'
            value={cardN}
            onChange={(e) => { setCardN(e.target.value) }} />
          <input type='text' placeholder='MM/YY'
            className='w-full my-1 outline-none p-2 rounded-lg' />
          <input type='text' placeholder='CVV'
            className='w-full my-1 outline-none p-2 rounded-lg' />

          <div className='flex items-center py-3'>
            <label className='px-3'>Save card details</label>
            <input type='checkbox' defaultChecked
              className='w-6 h-6 rounded-lg outline-none' />
          </div>
          <button onClick={() => { setIstopPay(false) }}
            className="text-xl bg-orange-500 font-bold text-center py-1 rounded-full w-full text-white">
            save $ confirm
          </button>
        </div>
      </div> : ""}

    </div>
  )
}

export default Order
