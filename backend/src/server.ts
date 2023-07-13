import dotenv from 'dotenv';
dotenv.config();
import { dbConnect } from './configs/database.config';
import cors from "cors";
import { sample_foods, sample_tags, sample_users } from "./data";
import foodRouter from './router/food.router';
import userRouter from './router/user.router';
import jwt from "jsonwebtoken";
import express from 'express';
dbConnect();

const  app=express();
app.use(express.json());


app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.use("/api/foods", foodRouter);
app.use("/api/users",userRouter);



const port=5000;
app.listen (port, () =>
{
    console.log("website served on  http://localhost:"+ port);
})