import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js";
import batchRoute from "./routes/batch.js";
const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO, { dbName: "capstone" });
    console.log("mongo connected");
  } catch (err) {
    console.log(err);
  }
};

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoute);
app.use("/api", batchRoute);

app.listen(process.env.PORT, () => {
  connect();
  console.log("server connected");
});
