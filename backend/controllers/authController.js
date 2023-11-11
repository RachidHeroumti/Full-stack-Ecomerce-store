import User from '../model/User.js'
import bcrypt from 'bcryptjs'
import { protect } from '../tools/authMiddlware.js'
import generateToken from '../configs/generateToken.js'

 export const Register=async(req,res)=>{
   const { username,email,password,isAdmin}=req.body ;
    if(!username||!email||!password){
        return res.json({msg:"Empty fields"}) ;}
 else{
   try{
     let user=await User.findOne({email}) ;
     if(user) return res.json({ msg :"user already Exist !" });
     else {
      
      if(isAdmin) user = new User({username,email,password,isAdmin:true});

     user = new User({username,email,password,isAdmin});
       user.save();
     }
       const userWithoutPassword = { ...user.toObject() };
      delete userWithoutPassword.password;


 res.status(200).json({ 
        "id":user._id,
        "name" :user.username,
        "email":user.email,
        "isAdmin":user.isAdmin,
       token : generateToken(user._id)
       })
   }catch(err){
    console.log(err)
   }

  }
}

export const login =async(req,res)=>{
 const { email,password}=req.body ;

    if(!email||!password)
     return res.json({msg:"Empty fields"}) ;
 else{
   try{
     let user=await User.findOne({email}) ;

     if(!user) return res.json({ msg :"email or password incorrect !" });
     else {
      

        if(!await user.matchPassword(password)) 
           return res.json({ msg :"email or password incorrect !" });
     }
 res.status(200).json({ 
        "id":user._id,
        "name" :user.username,
        "email":user.email,
        "isAdmin":user.isAdmin,
        token : generateToken(user._id)
       })
   }catch(err){
    console.log(err)
   }

  }
}

