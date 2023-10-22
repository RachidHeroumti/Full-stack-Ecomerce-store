import { useContext,createContext ,useState, useEffect} from 'react'
import { products } from '../data/data';

const EcoContext=createContext() ;

function EcoProvider({children}) {
  const[allProduct,setAllProduct] =useState([])
 const [productDetails,setProductDetails] = useState([]) ;
 const[searchdata,setSearchData]=useState([]);
 const[address,setAddress] =useState("");
 
  useEffect(()=>{
   fetch('https://fakestoreapi.com/products?limit=5')
            .then(res=>res.json())
            .then(prs=>{
              console.log( "arry come from fetch :",prs)
             setAllProduct(prs);
             setSearchData(prs) ;
            })
  },[])

  return (
    <EcoContext.Provider value={{
      productDetails ,setProductDetails ,
      searchdata ,setSearchData ,
      allProduct ,setAllProduct,
      address ,setAddress

    }}>{children}
    </EcoContext.Provider>
  )
}
export const EcoState = ()=>{
  return useContext(EcoContext) ;
}
export default EcoProvider

