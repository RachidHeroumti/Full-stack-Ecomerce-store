import { useEffect, useState } from "react";
import { EcoState } from "../../Context/EcoProvider";
import axios from "axios";
import { getProductRoute } from "../../RoutersApi/ApiRoutes";
import CardItem from "./CardItem";
import Loader from "../common/Loader";

function ProductHome() {
  const [isLoading, setIsLoading] = useState("Loading ...");
  const { searchdata, setAllProduct } = EcoState();
  useEffect(() => {
    const getPrs = async () => {
      try {
        const res = await axios.get(getProductRoute);
        if (res.data.products) {
          console.log("products came for db :", res.data);
          setAllProduct(res.data.products);
          // if the list empty when you search
          setIsLoading("No item with this name");
        }
      } catch (err) {
        console.log(err);
      }
    };
    getPrs();
  }, []);
  if (searchdata.length === 0 && isLoading === "Loading ...") {
    return (
        <Loader/>
    );
  }else if(searchdata.length === 0 && isLoading != "Loading ..."){
    return (
      <div className=" w-full flex justify-center items-center min-h-[200px]">
      <h1 className=" text-xl font-semibold text-gray-900 ">{isLoading}</h1>
      </div>
  );
  }

  return (
    <div id="shop" className="  py-[72px] container   ">
      {searchdata && (
        <h1 className=" text-2xl mb-8 font-medium  text-gray-900  text-center w-full">
          Featured Products
        </h1>
      )}
        <div className="grid lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-2 md:gap-6" id="shop">
            {searchdata &&
              searchdata.map((product) => {
                return (
                  <CardItem product={product} isLoading={isLoading} key={product._id} />
                );
              })}
          </div>

     
    </div>
  );
}

export default ProductHome;
