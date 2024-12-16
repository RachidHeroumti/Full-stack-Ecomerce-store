import React, { useEffect, useState } from 'react'
import { categories } from "../../data/data";
import { EcoState } from "../../Context/EcoProvider";
import { getCategories } from "../../RoutersApi/ApiRoutes";
import axios from "axios";

function ListCollection() {
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
    <div className=' '>
         {categories && (
        <div
          id="explore"
          className="rounded-sm p   flex flex-col  my-4  sm:space-y-4  sm:pt-12"
        >
          <h4 className="  text-center  font-semibold text-gray-950 mb-8 text-[26px]">
            Popular Categories 
          </h4>
          <p className="text-center p-1 mb-3 sm:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            assumenda est animi quas dolor commodi dolorem magni.{" "}
          </p>
          <div
            className=" gap-5 flex overflow-x-auto  scrollbar-thumb-gray-900 scrollbar-thin 
            scroll-smooth"
          >
            {category &&
              ListCategories.map((item, i) => {
                return (
                  <div
                    key={item._id}
                    className="  min-w-[250px]  rounded shadow-md flex flex-col items-center p-1 sm:p-4 justify-center"
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
  )
}

export default ListCollection
