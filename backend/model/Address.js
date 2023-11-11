import mongoose from "mongoose";

const addressSchema=mongoose.Schema({
  user:{type: mongoose.Schema.Types.ObjectId ,ref:'User',required:true},
  contactName: {type :String ,required:true},
  country: {type :String ,required:true},
  mobile: {type :String ,required:true},
  city: {type :String ,required:true},
  street: {type :String ,required:true},
  province: {type :String ,required:true},
  zipcode: {type :String ,required:true},
  isdefault: {type:Boolean ,required:true,default:true}
})

export default mongoose.model("Address",addressSchema);