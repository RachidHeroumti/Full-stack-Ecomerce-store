import express from 'express';
import { createRole,getRolles}  from'../controllers/RoleController.js';
import { protect, ProtectForAdmin } from '../tools/authMiddlware.js';

const route=express.Router();

route.post('/create',createRole);
route.get('/get-all',getRolles);


export default route ;


