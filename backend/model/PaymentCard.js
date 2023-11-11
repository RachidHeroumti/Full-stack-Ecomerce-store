import mongoose from "mongoose";

const paymentShema=mongoose.Schema({
  user:{type : mongoose.Schema.Types.ObjectId ,ref:"User",required :true},
  cardNumber :{ type :String ,required :true},
  DtCard :{type : String ,required :true},
  cvv :{ type : String ,required :true}
})

export default mongoose.model("Paymentcard",paymentShema) ;