// require('dotenv').config()
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: `.env`,
});

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("Error before listening: ", error);
      throw error;
    });
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running on ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed !!! ", err);
  });

/*
import express from 'express'
const app = express()

// ; laga lega
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGOBD_URI}/${DB_NAME}`)
    app.on("error",(error)=>{
        console.log("Error: ",error)
        throw error
    })

    app.listen(process.env.PORT ,()=> {
        console.log(`Server is running on port ${process.env.PORT}`)
    })
  } catch (err) {
    console.log("Error : ", err);
    throw err;
  }
})();
*/
