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

export { app };
