import React, { useState, useEffect } from "react";

import PIC3 from "../assets/pic3.png";
import { EcoState } from "../Context/EcoProvider";
import { getCategories } from "../RoutersApi/ApiRoutes";
import axios from "axios";
import { categories } from "../data/data";

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
    <div className=" container w-full mx-auto  " id="home">
      <div className="flex items-center px-10 bg-red-100 ">
        <div className="w-full h-[600px] flex p-12 flex-col justify-center text-gray-900 gap-1">
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
              className=" p-1  px-3 text-white justify-center items-center
            rounded-full bg-red-500 hover:bg-red-600"
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

      {categories && (
        <div
          id="explore"
          className="rounded-sm bg-red-50  flex flex-col  my-4  sm:space-y-4  sm:pt-12"
        >
          <h4 className="  text-center text-xl sm:text-3xl font-medium text-gray-800">
            <span className=" text-red-600 px-1 ">Popular</span> Categories
          </h4>
          <p className="text-center p-1 mb-3 sm:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            assumenda est animi quas dolor commodi dolorem magni.{" "}
          </p>
          <div
            className=" gap-5 flex overflow-x-scroll  scrollbar-thumb-red-200 scrollbar-thin 
          scrollbar-track-slate-50   scroll-smooth"
          >
            {category &&
              ListCategories.map((item, i) => {
                return (
                  <div
                    key={item._id}
                    className=" bg-white hover:bg-red-100 min-w-[250px]  rounded shadow-md flex flex-col items-center p-1 sm:p-4 justify-center"
                    onClick={() => {
                      onGetProductByCategory(item._id);
                    }}
                  >
                    <img
                      src={item.image}
                      alt="img"
                      className=" w-[100px] h-[100px] rounded-full  "
                    />
                    <h4 className="   text-gray-950 text-center  p-2">
                      {item.name}{" "}
                    </h4>
                    {/* <p className='text-sm sm:text-xl text-gray-500 p-1'>{item.description}</p> */}
                  </div>
                );
              })}
          </div>

          {/* <div className=' flex text-white justify-center items-center'
          onClick={() => { showallcategories ? setShowAllCategories(false) : setShowAllCategories(true) }}
        >
          <button className='text-center bg-gray-900 p-2 rounded-md sm:text-xl'
          >{showallcategories ? 'Show less' : 'Show more ->'}
          </button>
        </div> */}
        </div>
      )}
    </div>
  );
}

export default Hero;
