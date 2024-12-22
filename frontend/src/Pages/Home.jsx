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
      className="max-w-[1640]  bg-white container 
           font-poppins  xl:px-5 px-0"
    >
      <TopHeader/>
      <Hero />
      <ListCollection />
      <SrinkListCollection />
      <ProductHome />
      <Collection2 />
      <ProductHome />
      <ToastContainer />
    </div>
  );
}

export default Home;
