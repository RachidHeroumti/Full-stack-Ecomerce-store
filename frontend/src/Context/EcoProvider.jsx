import { useContext, createContext, useState, useEffect } from 'react'
import { products } from '../data/data';
import cookies from 'js-cookie'


const EcoContext = createContext();

function EcoProvider({ children }) {
  const [userToken, setUserToken] = useState("");
  const [allProduct, setAllProduct] = useState([])
  const [productDetails, setProductDetails] = useState([]);
  const [searchdata, setSearchData] = useState([]);
  const [address, setAddress] = useState("");
  const [dataToBay, setDataToBay] = useState([]);

  useEffect(() => {

    //setSearchData(products);

    if (allProduct.length > 1) {
      setSearchData(allProduct);
    }
  }, [allProduct])

  
  useEffect(() => {
    const token = cookies.get("token");
    if (token) {
      setUserToken(token);

    }
  }, [])

  return (
    <EcoContext.Provider value={{
      productDetails, setProductDetails,
      searchdata, setSearchData,
      allProduct, setAllProduct,
      address, setAddress,
      userToken, setUserToken,
      dataToBay, setDataToBay

    }}>{children}
    </EcoContext.Provider>
  )
}
export const EcoState = () => {
  return useContext(EcoContext);
}
export default EcoProvider

