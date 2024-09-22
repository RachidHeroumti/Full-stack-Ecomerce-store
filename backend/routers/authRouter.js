import express from 'express';
import { Register,login ,updateUserRoleByAdmin}  from'../controllers/authController.js';
import { protect, ProtectForAdmin } from '../tools/authMiddlware.js';

const route=express.Router();


route.post('/',Register);
route.post('/login',login);
route.post('/update-user-role/:id',protect,ProtectForAdmin,updateUserRoleByAdmin);

export default route ;