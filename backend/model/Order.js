import mongoose from 'mongoose'

const orderSchema =mongoose.Schema({
  user:{type : mongoose.Schema.Types.ObjectId , ref:"User",required :true},
  Products :[{
    product :{type : mongoose.Schema.Types.ObjectId , ref:"Product" ,required:true},
    qunatity :{ type : Number , required :true ,default :1}
  }]
})

export default mongoose.model("Order",orderSchema);