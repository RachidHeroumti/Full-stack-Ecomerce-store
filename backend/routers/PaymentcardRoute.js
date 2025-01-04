import express from "express";
import { protect } from "../middelware/authMiddlware.js";
import {
  AddPaymentCardInfo,
  getPaymentCardInfo,
} from "../controllers/PaymentcardController.js";
const route = express.Router();

route.post("/add-paymentcard", protect, AddPaymentCardInfo);
route.get("/get-paymentcard", protect, getPaymentCardInfo);

export default route;
