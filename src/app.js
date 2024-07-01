import express from "express";
const app = express();
import cors from "cors";
import cookieParser from "cookie-parser";

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true, // kon kon se headers allow karne hai
  })
);

app.use(
  express.json({
    // for coming json data
    limit: "16kb",
  })
);

app.use(express.urlencoded({ extended: true, limit: "16kb" })); // for url data
app.use(express.static("public"));
app.use(cookieParser());

// routes import
import userRouter from './routes/user.routes.js'

// routes declaration
app.use("/api/v1/users",userRouter)

// our route will be like
// http://localhost:8000/api/v1/users/register

export { app };
