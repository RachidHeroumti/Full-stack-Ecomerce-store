import express from "express";
import {
  Register,
  login,
  updateUserRoleByAdmin,getTokenEmailVerification
} from "../controllers/authController.js";
import { protect, ProtectForAdmin } from "../middelware/authMiddlware.js";

const route = express.Router();

route.post("/", Register);
route.post("/login", login);
route.post(
  "/update-user-role/:id",
  protect,
  ProtectForAdmin,
  updateUserRoleByAdmin
);
route.get('/verify-email/:token',getTokenEmailVerification);

export default route;
