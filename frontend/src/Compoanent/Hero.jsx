import React, { useState, useEffect } from "react";

import PIC3 from "../assets/pic3.png";
import { EcoState } from "../Context/EcoProvider";
import { getCategories } from "../RoutersApi/ApiRoutes";
import axios from "axios";


function Hero() {
  const {
    searchdata,
    setProductDetails,
    setAllProduct,
    allProduct,
    setSearchData,
  } = EcoState();
  const [category, setCategory] = useState([]);
  const [ListCategories, setListCategory] = useState([]);
  const [showallcategories, setShowAllCategories] = useState(false);

  const onSetCategory = (ctgName) => {
    setSearchData(
      allProduct.filter((item) => {
        return item.category == ctgName;
      })
    );
    setNav(false);
  };

  useEffect(() => {
    const getCatgs = async () => {
      const res = await axios.get(getCategories);

      if (res.data.categories) {
        setCategory(res.data.categories);
      }
    };

    getCatgs();
  }, []);

  useEffect(() => {
    if (category) {
      const ctgs = category;
      if (!showallcategories) {
        // setListCategory(ctgs.slice(4));
        setListCategory(ctgs);
      } else {
        setListCategory(ctgs);
      }
    }
  }, [showallcategories, category]);

  const onGetProductByCategory = (categoryId) => {
    console.log(categoryId);
    try {
      //const res= axios.get()
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className=" container w-full mx-auto pt-5 " id="home">
      <div className="flex md:items-center ">
        <div className="w-full  md:h-[600px] flex  flex-col justify-center text-gray-900 gap-1">
          <h4 className="  text-2xl md:text-4xl  font-bold">Welecom to </h4>
          <h4 className=" text-2xl md:text-4xl  font-bold"> shop onlay </h4>

          <p className="text-gray-500  py-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, pariatur
            dolorum ullam minus ad fugiat delectus doloremque quo magnam at,
            possimus rem adipisci perspiciatis debitis magni excepturi? Nam,
            magni ex.
          </p>

          <div className="flex flex-col sm:flex-row  sm:space-x-4 my-5 space-y-1 space-x-1">
            <a
              href="#shop"
              className=" p-1  px-3 flex text-white justify-center items-center
            rounded-full bg-orange-500 hover:bg-orange-600"
            >
              Shop Now
            </a>

            <a
              href="#explore"
              className=" p-1 px-3 text-gray-800 hover:border-gray-800 flex  
              rounded-full border border-gray-300"
            >
              Explore
            </a>
          </div>
        </div>

        <img
          src={PIC3}
          alt=""
          className="md:w-2/3 xl:w-full w-full h-[600px] sm:p-12 p-3 rounded hidden md:flex"
        />
      </div>

   
    </div>
  );
}

export default Hero;
