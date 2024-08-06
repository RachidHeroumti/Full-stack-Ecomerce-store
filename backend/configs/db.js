import mongoose from "mongoose";

let conn = null;

const connectDB = async () => {
  try {
    if (conn === null) {
      conn = await mongoose.connect(process.env.URL_DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Database connected ...!");
    }
    return conn;
  } catch (err) {
    console.log(err);
    throw new Error('Database connection failed');
  }
};

export default connectDB;
