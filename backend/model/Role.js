import mongoose from "mongoose";

const RoleSchema = mongoose.Schema({
role :{type :String ,required :true}
},{timestamp:true})

export default mongoose.model("Role",RoleSchema);