import express from "express";
import { protect ,ProtectForAdmin} from '../tools/authMiddlware.js'
 import {createCategory,getCategories ,getCategory} from '../controllers/CategoryController.js'
 const route=express.Router();
  
route.post("/category",protect,ProtectForAdmin,createCategory);
route.get("/categories",getCategories);
route.get("/category/:id",getCategory);

 export default route ;