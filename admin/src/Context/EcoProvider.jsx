import { useContext, createContext, useState, useEffect } from "react";
import { products } from "../data/data";
import cookies from "js-cookie";
import { getCategoriesRoute, getProductRoute } from "../RoutersApi/ApiRoutes";
import axios from "axios";

const EcoContext = createContext();

function EcoProvider({ children }) {
  const [userToken, setUserToken] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [productDetails, setProductDetails] = useState([]);
  const [collections, setCollections] = useState([]);
  useEffect(() => {
    const getPrs = async () => {
      try {
        const res = await axios.get(getProductRoute);
        if (res.data.products) {
          setAllProducts(res.data.products);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getPrs();
  }, []);

  useEffect(() => {
    const token = cookies.get("token");
    if (token) {
      setUserToken(token);
    }
  }, []);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await axios.get(getCategoriesRoute);
        if (res.data.categories) {
          setCollections(res.data.categories);
        }
      } catch (err) {
        console.log("🚀 ~ useEffect ~ err:", err);
      }
    };
    getCategories();
  }, []);
  return (
    <EcoContext.Provider
      value={{
        productDetails,
        setProductDetails,
        allProducts,
        setAllProducts,
        userToken,
        setUserToken,
        collections,
        setCollections,
      }}
    >
      {children}
    </EcoContext.Provider>
  );
}
export const EcoState = () => {
  return useContext(EcoContext);
};
export default EcoProvider;
