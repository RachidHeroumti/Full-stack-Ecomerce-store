import Order from "../model/Order.js";


export const AddOrder=async(req,res)=>{
  const {products}=req.body ;

  try{
    const order= new Order({ user:req.user._id,products}) ;
      await res.save();
      res.status(200).json({order}) ;
  }catch(err){
    console.log(err) ;
   }

}

export const getOrders =async(req,res)=>{
   try{
   const orders =await Order.find({user :req.user._id});
     
        if(!orders) return res.json({message : "no order yet"});
 res.status(200).json({orders}) ;
   }catch(err){
    console.log(err) ;
   }
}

