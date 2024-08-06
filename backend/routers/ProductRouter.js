 import express from "express";
 import { protect ,ProtectForAdmin} from '../tools/authMiddlware.js'
 import {createProduct,getProduct
  ,updateProduct,getProducts,getProductByCategory} from '../controllers/ProductController.js'
 const route=express.Router();
  
 route.get("/products",getProducts);
 route.get("/product/:id",getProduct);
 route.post("/product",protect,ProtectForAdmin,createProduct);
 route.get("/products/category/:{category}",getProductByCategory);
 route.post("/product/:id",protect,ProtectForAdmin,updateProduct);

 export default route ;

 
