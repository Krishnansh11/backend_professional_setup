import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGOBD_URI}/${DB_NAME}`
    );
    console.log(
      `MongoDB connected !! DB HOST : ${connectionInstance.connection.host}`
    );
  } catch (err) {
    console.log("MongoDB connection failed : ", err);
    process.exit(1);
  }
};

export default connectDB