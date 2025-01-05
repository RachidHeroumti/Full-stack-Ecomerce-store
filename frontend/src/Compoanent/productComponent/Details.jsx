import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsFillCartFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AddcardRoute } from "../../RoutersApi/ApiRoutes";
import { MdStarRate } from "react-icons/md";
import ProductHome from "./ProductHome";
import { useWindowSize } from "@react-hook/window-size";
import CardItem from "./CardItem";
import { IoMdPerson } from "react-icons/io";
import { CiStar } from "react-icons/ci";
import { EcoState } from "../../Context/EcoProvider";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

function Details({ product }) {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const [imagePr, setImagePr] = useState(product.image);
  const { searchdata, setAllProduct, dataToBay } = EcoState();
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
          Authorization: `Bearer ${userToken}`,
        },
      };
      try {
        const res = await axios.post(AddcardRoute, config);
        if (res.data._id) {
          toast.success("Add to cart successfully", toastOptions);
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      navigate("/login");
    }
  };

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
        if (res.data.products) {
          setAllProduct(res.data.products);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getPrs();
  }, []);

  return (
    <div className="container">
      <div className="flex bg-gray-50 p-4">
        <div className="md:flex">
          <div className="md:w-1/2 flex flex-col w-full items-center justify-center">
            <div className="w-full max-w-[250px]  md:max-w-[500px]">
              {product.images && product.images.length > 0 ? (
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar]}
                  navigation
                  pagination={{ clickable: true }}
                  spaceBetween={10}
                  slidesPerView={1}
                  className="flex flex-row justify-center items-center"
                >
                  {product.images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={image}
                        alt={`Product Image ${index + 1}`}
                        onClick={() => setImagePr(image)}
                        className=" cursor-pointer rounded-md hover:scale-105 transition-transform duration-200"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <p>No images available</p>
              )}
              <div className="flex flex-row justify-center items-center p-2 gap-2">
                {product.images.slice(0, 4).map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    onClick={() => setImagePr(image)}
                    className="h-[60px] w-[50px] cursor-pointer"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="md:w-1/2 p-4 flex flex-col text-slate-800">
            <div className="">
              <h2 className="sm:text-2xl text-xl font-bold pb-2 px-2 truncate capitalize">
                {product.title}
              </h2>

              <div className="mt-3 flex space-x-1 items-center">
                <MdStarRate size={15} className="text-orange-500" />
                <MdStarRate size={15} className="text-orange-500" />
                <MdStarRate size={15} className="text-orange-500" />
                <MdStarRate size={15} className="text-orange-500" />
                <MdStarRate size={15} className="text-gray-400" />
                <span className="">(12)</span>
              </div>
              <h1 className="p-1 text-2xl font-bold mt-3">
                {product.price} <span>$$</span>
              </h1>
              <p className="text-gray-700 p-2 font-medium tracking-wider pe-12">
                {product.description}
              </p>

              <div className="flex items-center gap-4 w-full">
                {/* Quantity Selector */}
                <div className="flex items-center border justify-between border-gray-500 rounded-full overflow-hidden w-1/3">
                  {/* Decrement Button */}
                  <button
                    onClick={() =>
                      handleQuantityChange({
                        target: { value: Math.max(1, quantity - 1) },
                      })
                    }
                    className="bg-gray-200 text-gray-700 font-semibold px-3 p-1 hover:bg-gray-300 transition-all"
                  >
                    -
                  </button>

                  {/* Quantity Input */}
                  <input
                    type="text"
                    className="w-16 outline-none bg-gray-100 text-center text-xl font-semibold p-1 border-t border-b border-gray-200"
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
                    className="bg-gray-200 text-gray-700 font-semibold px-3 p-1 hover:bg-gray-300 transition-all"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={AddToCart}
                  className="border text-white font-medium px-5 py-2 rounded-full w-1/2 bg-orange-500 shadow hover:text-white transition-all duration-200"
                >
                  Add to Cart
                </button>
              </div>

              <div className="text-gray-800">
                <p className="py-2">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Porro tenetur, quas delectus ex quis veniam consequatur aut
                  quasi in quo exercitationem blanditiis. Modi quam neque
                  similique ad harum tenetur illo.
                </p>
                <p className="py-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  porro tempore necessitatibus. Quaerat, aut? Velit, harum
                  tempore id odit cumque dolore nisi at dignissimos tenetur quod
                  officiis necessitatibus labore sapiente!
                </p>
                <p className="py-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  impedit sint debitis eos error porro eaque perspiciatis nobis
                  iure maxime pariatur minima deleniti, quos, vero blanditiis
                  officiis delectus? Harum, doloremque!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5">
        <h1 className="text-2xl font-semibold text-yellow-700 p-5">Reviews</h1>
        <div className="text-xl font-normal text-black">
          <div className="flex items-center">
            <IoMdPerson size={25} className="" />
            <span className="px-3">@username</span>
            <div className="flex items-center space-x-1">
              <CiStar size={25} className="text-yellow-500" />
              <CiStar size={25} className="text-yellow-500" />
              <CiStar size={25} className="text-yellow-500" />
              <CiStar size={25} className="text-yellow-500" />
              <CiStar size={25} className="text-yellow-500" />
            </div>
          </div>

          <p className="p-5 text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. quas
            incidunt delectus.
          </p>
        </div>
      </div>
      <div className="p-5">
        <h1 className="text-3xl font-semibold text-center m-5 text-red-950">
          See More Product From same category
        </h1>
      </div>

      <ToastContainer />
    </div>
  );
}

export default Details;