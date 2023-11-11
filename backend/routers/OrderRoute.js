import express  from "express";
import {AddOrder,getOrders} from "../controllers/OrderController.js"
import { protect } from "../tools/authMiddlware.js";
 
 const route =express.Router();

  route.post("/add-order",protect,AddOrder);
  route.get("/get-orders",protect,getOrders);
 export default route ;