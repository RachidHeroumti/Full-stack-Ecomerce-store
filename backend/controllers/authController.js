import User from "../model/User.js";
import bcrypt from "bcryptjs";
import dotenv  from 'dotenv';
import generateToken from "../configs/generateToken.js";
import nodemailer from 'nodemailer'
import jwt from "jsonwebtoken"
dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.USER_EMAIL,  
    pass: process.env.EMAIL_PWD    
  }
});


export const getTokenEmailVerification = async (req, res) => {
  const { token } = req.params;
  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.TOKEN_SCRT ); 
    const user = await User.findById(decoded.id);
    
    if (!user) {
      return res.status(400).json({ message: 'Invalid token' });
    }
    if (user.isVerified) {
      return res.status(400).json({ message: 'User is already verified' });
    }

    user.isVerified = true;
    await user.save();
    res.status(200).send("<h2>Email successfully verified</h2>");
    
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: 'Invalid or expired token' });
  }
};

export const Register = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.json({ msg: "Empty fields" });
  }
  if (!validateEmail(email)) {
    return res.status(400).json({ msg: "Invalid email format" });
  }
  if (!validatePassword(password)) {
    return res
      .status(400)
      .json({
        msg: "Password must be at least 6 characters long and contain both letters and numbers",
      });
  }
  try {
    let user = await User.findOne({ email });
    if (user) return res.json({ msg: "user already Exist !" });

    else {
      user = new User({ username, email, password });
      user.save();

      const token = generateToken(user._id,1);
  
      const verificationUrl = `http://localhost:5000/api/user/verify-email/${token}`;

      const mailOptions = {
        from:process.env.User_Email,
        to: user.email,
        subject: 'Email Verification',
        html: `<p>Click the following link to verify your email: <a href="${verificationUrl}">${verificationUrl}</a></p>`
      };


      await transporter.sendMail(mailOptions);
    }

    res.status(200).json({
      id: user._id,
      name: user.username,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } catch (err) {
    console.log(err);
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) return res.json({ msg: "Empty fields" });
  else {
    try {
      let user = await User.findOne({ email });

      if (!user) return res.json({ msg: "email or password incorrect !" });
      else {
        if (!(await user.matchPassword(password)))
          return res.json({ msg: "email or password incorrect !" });
      }
      res.status(200).json({
        id: user._id,
        name: user.username,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      });
    } catch (err) {
      console.log(err);
    }
  }
};

export const updateUserRoleByAdmin = async (req, res) => {
  const { id } = req.params;
  try {
    let userToUpdate = findOne({ _id: id });
    if (!userToUpdate) return res.status(200).json({ msg: "user not found" });
    userToUpdate = await User.findByIdAndUpdate(id, { isAdmin: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePassword = (password) => {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  return passwordRegex.test(password);
};




