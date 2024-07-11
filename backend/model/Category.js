import mongoose from "mongoose";

const CategorySchema=mongoose.Schema({

  name:{type :String ,required :true ,unique:true},
  image:{type : String ,required :true},
  description :{type :String}
})

export default mongoose.model("Category",CategorySchema);