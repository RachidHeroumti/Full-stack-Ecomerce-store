 import express from "express";
 import { protect ,ProtectForAdmin} from '../tools/authMiddlware.js'
 import {CreateProduct,getProduct
  ,updateProduct,getProducts,getProductWhere} from '../controllers/ProductController.js'
 const route=express.Router();
  
 route.get("/products",getProducts);
 route.get("/product/:id",getProduct);
 route.post("/product",protect,ProtectForAdmin,CreateProduct);
 route.get("/products/where",getProductWhere);
 route.post("/product/:id",protect,ProtectForAdmin,updateProduct);

 export default route ;

 
