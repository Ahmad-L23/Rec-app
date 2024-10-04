import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { userRouter } from "./routes/users.js";
import { recipesRouter } from "./routes/recipes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);
app.use("/",(req,res)=>{
  res.json("hello");
})
mongoose.connect(
  "mongodb://Ahmad:0795892080a@cluster0-shard-00-00.nonec.mongodb.net:27017,cluster0-shard-00-01.nonec.mongodb.net:27017,cluster0-shard-00-02.nonec.mongodb.net:27017/?ssl=true&replicaSet=atlas-l4x11w-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"
);
app.listen(3001, () => console.log("server started!"));
