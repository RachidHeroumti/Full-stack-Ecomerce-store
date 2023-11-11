import { protect } from '../tools/authMiddlware.js'
import express from 'express'
import {Addaddress,getAddresses} from '../controllers/AddresController.js'

 const route=express.Router();
  route.post("/add",protect,Addaddress) ;
  route.get("/get",protect,getAddresses) ;

export default route;