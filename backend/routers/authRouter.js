import express from 'express';
import { Register,login}  from'../controllers/authController.js';

const route=express.Router();


route.post('/',Register);
route.post('/login',login);

export default route ;