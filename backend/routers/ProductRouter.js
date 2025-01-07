import express from "express";
import { protect, ProtectForAdmin } from "../middelware/authMiddlware.js";
import {
  createProduct,
  getProduct,
  updateProduct,
  getProducts,
  getProductByCategory,
  searchProduct
} from "../controllers/ProductController.js";
const route = express.Router();

route.get("/products", getProducts);
route.get("/products/search", searchProduct);
route.get("/product/:id", getProduct);
route.post("/product/create/", protect, ProtectForAdmin, createProduct);
route.get("/products/category/:{category}", getProductByCategory);
//
route.post("/product-update/:id", protect, ProtectForAdmin, updateProduct);

export default route;
