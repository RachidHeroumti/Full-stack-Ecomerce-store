import User from '../model/User.js'
import bcrypt from 'bcryptjs'
import { protect } from '../tools/authMiddlware.js'
import generateToken from '../configs/generateToken.js'

 export const Register=async(req,res)=>{
   const { username,email,password}=req.body ;
    if(!username||!email||!password){
        return res.json({msg:"Empty fields"}) ;}
   if (!validateEmail(email)) {
          return res.status(400).json({ msg: "Invalid email format" });
        }
   if (!validatePassword(password)) {
          return res.status(400).json({ msg: "Password must be at least 6 characters long and contain both letters and numbers" });
        }
   try{
     let user=await User.findOne({email}) ;
     if(user) return res.json({ msg :"user already Exist !" });

     else {
     user = new User({username,email,password});
       user.save();
     }
       //const userWithoutPassword = { ...user.toObject() };
      //delete userWithoutPassword.password;


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

export const updateUserRoleByAdmin=async(req,res)=>{
const {id}=req.params;
 try{
  let userToUpdate=findOne({_id:id});
   if(!userToUpdate)
      return res.status(200).json({msg:"user not found"});
   userToUpdate = await User.findByIdAndUpdate(id,{isAdmin:true});
 } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "Server error" });
  }
}


const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email); 
};

const validatePassword = (password) => {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  return passwordRegex.test(password);
};
