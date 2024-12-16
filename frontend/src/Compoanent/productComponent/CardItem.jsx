import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BsFillCartFill } from "react-icons/bs";
import axios from "axios";
import { EcoState } from "../../Context/EcoProvider";
import { AddcardRoute } from "../../RoutersApi/ApiRoutes";
import { MdStarRate } from "react-icons/md";

function CardItem({ products, isLoading }) {
  const { setProductDetails, userToken } = EcoState();
  const navigate = useNavigate();
  const [hoveredProductId, setHoveredProductId] = useState(null);

  const OnDetailes = (product) => {
    console.log(product);
    setProductDetails(product);
    navigate("/details");
  };

  const AddToCart = async (product) => {
    if (userToken) {
      try {
        const res = await axios.post(
          AddcardRoute,
          { product: product._id, quantity: 1 },
          config
        );

        console.log("To add to card ", res);
        if (res.status === 200) {
          toast.success("Add to cart successfully", toastOptions);
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      const id = product._id;
      localStorage.setItem(id, JSON.stringify(product));
      toast.success("Added to cart successfully", toastOptions);
    }
  };

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
    },
  };

  if (products.length === 0 && isLoading === "Loading ...") {
    return (
      <h1 className="text-xl text-black text-center font-semibold">
        {isLoading}
      </h1>
    );
  }

  return (
    <div className="grid lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-2 md:gap-6" id="shop">
      {products &&
        products.map((product) => {
          return (
            <div
              key={product._id}
              onClick={() => OnDetailes(product)}
              style={{
                color: "rgb(42, 43, 42)", // Corrected the typo and ensured the value is a string
              }}
              className="rounded   w-full relative  pb-10  "
              onMouseOver={() => setHoveredProductId(product._id)}
              onMouseLeave={() => setHoveredProductId(null)}
            >
              <img
                src={product.image}
                alt=""
                className="rounded-sm w-full h-[250px] object-cover"
              />
              <div className="p-3 ">
                <h2 className="text-xl font-medium ">
                  {product.title}
                </h2>
                <h2 className="text-xl font-semibold mt-3">
                  {product.price}
                  <span> $$</span>
                </h2>
                <div className=" mt-3 flex space-x-2">
                <MdStarRate size={16} className=" text-gray-800"/>
                <MdStarRate size={16} className=" text-gray-800"/>
                <MdStarRate size={16} className=" text-gray-800"/>
                <MdStarRate size={16} className=" text-gray-800"/>
                <MdStarRate size={16} className=" text-gray-400"/>
                <span className="">(2)</span>
                </div>
              </div>
              <div className="p-2 w-full  items-end">
                <div className="flex  w-full space-x-2 ">
                  
                   <button
                   onClick={(e) => {
                     e.stopPropagation();
                     AddToCart(product);
                   }}
                  
                   className="flex absolute  bottom-2 left-2 right-2 bg-orange-500 rounded-full
                    text-white  items-center  justify-center text-center w-full p-2"
                 >
                   Add to Cart
                 </button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default CardItem;
