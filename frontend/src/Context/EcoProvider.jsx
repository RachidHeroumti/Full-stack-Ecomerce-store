import { useContext,createContext ,useState} from 'react'
import { products } from '../data/data';

const EcoContext=createContext() ;

function EcoProvider({children}) {
  const[allProduct,setAllProduct] =useState([])
 const [productDetails,setProductDetails] = useState([]) ;
 const[searchdata,setSearchData]=useState(products);
 const[address,setAddress] =useState("");


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

