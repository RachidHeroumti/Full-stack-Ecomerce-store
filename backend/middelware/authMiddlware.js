import User from "../model/User.js";
import jwt from 'jsonwebtoken'

export const protect=async(req,res,next)=>{
  
  let token ;
  if(  req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")){

      try{
         token = req.headers.authorization.split(" ")[1];
      //decodes token id
       const decoded = jwt.verify(token, process.env.TOKEN_SCRT);
       
       req.user = await User.findById(decoded.id).select("-password");
      
           // remember to congfigur if user deleted 
            next();
          
      }catch(err){
        res.status(401).json({message:"Not authorized, token failed"});
       //throw new Error("Not authorized, token failed");  
      }

     }
      if (!token) {
    res.status(401).json({message:"Not authorized, no token"});
//    throw new Error("Not authorized, no token");
  }

}

export const ProtectForAdmin=async(req,res,next)=>{
   const id=req.user._id;
   try{
     const user =await User.findById(id).select("-password");
      if(user.isAdmin===true){
       // req.user=user;
      next();
      }
      else{
    res.status(401).json({message:"You 're not Allowed to see This page !"});
      }
       
   }catch(err){
     res.status(401).json({ message:"Not authorized,Verification Error !"});
    //throw new Error("Not authorized,Verification Error !");
   }
}
export const ProtectSallers=async(req,res,next)=>{
  const id=req.user._id;
  try{
    const user =await User.findById(id).select("-password");
     if(user.role==='saler'){
      // req.user=user;
     next();
     }
     else{
   res.status(401).json({message:"You 're not allowed to here !"});
     }
      
  }catch(err){
    res.status(401).json({ message:"Not authorized,Verification Error !"});
   //throw new Error("Not authorized,Verification Error !");
  }
}
