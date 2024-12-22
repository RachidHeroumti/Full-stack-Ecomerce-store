import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsFillCartFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AddcardRoute } from "../../RoutersApi/ApiRoutes";

import ProductHome from "./ProductHome";
import { useWindowSize } from "@react-hook/window-size";
import CardItem from "./CardItem";
import { IoMdPerson } from "react-icons/io";
import { CiStar } from "react-icons/ci";
import { EcoState } from "../../Context/EcoProvider";

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
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const res = await axios.post(AddcardRoute, config);
        if (res.data._id) {
          toast.success("Add to cart successfuly ", toastOptions);
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
    <div className=" container md:p-12 p-2  mt-10  ">
      <div className=" flex bg-gray-50  p-4">
        <div className="md:flex">
          <div className=" md:w-1/2 flex flex-col   md:flex-row w-full  items-center justify-center">
            <div className="flex flex-row md:flex-col justify-center items-center m-2 ">
              <img
                src={product.images[0]}
                alt=""
                onClick={() => {
                  setImagePr(product.images[0]);
                }}
                className=" h-[60px] w-[50px]  "
              />
              <img
                src={product.images[1]}
                alt=""
                onClick={() => {
                  setImagePr(product.images[1]);
                }}
                className="h-[60px] w-[50px]  "
              />
              <img
                src={product.images[2]}
                alt=""
                onClick={() => {
                  setImagePr(product.images[2]);
                }}
                className="h-[60px] w-[50px]   "
              />
              <img
                src={product.images[3]}
                alt=""
                onClick={() => {
                  setImagePr(product.images[3]);
                }}
                className="h-[60px] w-[50px]   "
              />
            </div>
            <img
              src={imagePr}
              alt="img"
              className="max-w-[350px] sm:h-[200px]  md:h-[400px] w-full h-[100px] object-cover"
            />
          </div>

          <div className="md:w-1/2 p-4 flex flex-col ">
            <div className="">
              <h2 className=" sm:text-2xl font-medium text-gray-950 pb-2 px-2 truncate">
                {product.title}
              </h2>
              <h1 className="  p-1 text-orange-800 font-medium px-5">
                {product.price} <span>$$</span>
              </h1>
              <p className="text-gray-900 p-2 font-normal tracking-wider pe-12">
                {product.description}
              </p>


              <div className="flex items-center gap-4">
                {/* Quantity Selector */}
                <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                  {/* Decrement Button */}
                  <button
                    onClick={() =>
                      handleQuantityChange({
                        target: { value: Math.max(1, quantity - 1) },
                      })
                    }
                    className="bg-gray-200 text-gray-700 font-semibold px-3 py-2 hover:bg-gray-300 transition-all"
                  >
                    -
                  </button>

                  {/* Quantity Input */}
                  <input
                    type="number"
                    className="w-16 outline-none bg-gray-100 text-center text-xl font-semibold py-2 border-t border-b border-gray-200"
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
                    className="bg-gray-200 text-gray-700 font-semibold px-3 py-2 hover:bg-gray-300 transition-all"
                  >
                    +
                  </button>
                </div>

               
                <button
                  onClick={AddToCart}
                  className="border border-red-500 bg-white text-red-500 font-medium px-5 py-2 rounded-lg 
               shadow hover:bg-red-500 hover:text-white transition-all duration-200"
                >
                  Add to Cart
                </button>
              </div>

              <div className=" text-gray-800  ">
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
      <div className="  p-5">
        <h1 className=" text-2xl font-semibold text-yellow-700 p-5">
          Reviwes{" "}
        </h1>
        <div className=" text-xl font-normal text-black">
          <div className=" flex items-center">
            <IoMdPerson size={25} className="" />
            <span className=" px-3">@username</span>
            <div className=" flex items-center space-x-1">
              <CiStar size={25} className=" text-yellow-500" />
              <CiStar size={25} className=" text-yellow-500" />
              <CiStar size={25} className=" text-yellow-500" />
              <CiStar size={25} className=" text-yellow-500" />
              <CiStar size={25} className=" text-yellow-500" />
            </div>
          </div>

          <p className="p-5  text-gray-800 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. quas
            incidunt delectus .
          </p>
        </div>
      </div>
      <div className="p-5">
        <h1 className=" text-3xl font-semibold text-center m-5  text-red-950">
          See More Product From same category{" "}
        </h1>
      </div>

    
      <ToastContainer />
    </div>
  );
}

export default Details;
