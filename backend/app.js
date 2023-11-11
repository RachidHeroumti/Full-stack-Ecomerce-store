import express from 'express';
import cors  from 'cors' ;
import dotenv  from 'dotenv';
import authRoute from './routers/authRouter.js' ;
import ProductRoute from './routers/ProductRouter.js'
import CategoryRoute from './routers/CategoryRouter.js'
import CartRoute from './routers/CartRouter.js'
import OrderRoute from "./routers/OrderRoute.js"
import PaymentCardRoute from "./routers/PaymentcardRoute.js"
import connectDB from "./configs/db.js"
import AddressRoute from './routers/AddressRoute.js'

dotenv.config();
const app=express();
 
const PORT=process.env.PORT||5001 ;
 
app.use(express.json());
app.use(cors())

connectDB();

app.use("/api/user",authRoute);
app.use("/api",ProductRoute);
app.use("/api",CategoryRoute);
app.use("/api/cart",CartRoute);
app.use("/api/order",OrderRoute);
app.use("/api/address",AddressRoute);
app.use("/api/paymentcard",PaymentCardRoute);

app.listen(PORT,()=>{
  console.log("listening to the port :",PORT);
})

