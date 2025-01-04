import express from "express";
import {
  CreateOrAddTocart,
  deleteFromCart,
  getItemsInCart,
} from "../controllers/CartController.js";
import { protect } from "../middelware/authMiddlware.js";
const route = express.Router();

route.post("/add-create", protect, CreateOrAddTocart);
route.get("/get", protect, getItemsInCart);
route.post("/delete/:id", protect, deleteFromCart);

export default route;
