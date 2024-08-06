import mongoose from "mongoose";


 const connectDB=async()=>{


  try{
    const conn = await mongoose.connect(process.env.URL_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
   console.log("Database connected ...!");
  }catch(err){
    console.log(err)
  }
 }

 export default connectDB ;