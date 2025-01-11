import Role from "../model/Role.js";

export const createRole=async(req,res)=>{
    const {role}=req.body;
     try{
        const roleobject=new Role({role});
       await roleobject.save();
         res.status(200).json({ roleobject });
     }catch(err) {
     console.log("🚀 ~ createRole ~ err:", err)
     res.status(400).json({ message: err.message });
    }
}

export const getRolles=async(req,res)=>{
    try{
        const roles = await Role.find();
        res.status(200).json({roles});
    }catch(err){
        console.log("🚀 ~ getRolles ~ err:", err) ;
        res.status(400).json({ message: err.message });
    }
}