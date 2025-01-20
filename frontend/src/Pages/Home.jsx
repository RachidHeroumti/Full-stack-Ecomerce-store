import NavBar from "../Compoanent/common/NavBar";
import Hero from "../Compoanent/Hero";
import ProductHome from "../Compoanent/productComponent/ProductHome";
import { ToastContainer } from "react-toastify";

import ListCollection from "../Compoanent/Collections/ListCollection";
import TopHeader from "../Compoanent/common/TopHeader";
import Collection2 from "../Compoanent/Collections/Collection2";
import SrinkListCollection from "../Compoanent/Collections/SrinkListCollection";


function Home() {
  return (
    <div
      className=" 
           font-poppins  "
    >
      <TopHeader/>
      <div className=" xl:px-28 px-5 gap-2"> 
      <Hero />
      <ListCollection />
      <SrinkListCollection />
      <ProductHome />
      <Collection2 />
      <ProductHome />
      <ToastContainer />
      </div>
    </div>
  );
}

export default Home;
