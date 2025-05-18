import express from "express";
import dotenv from "dotenv";
import connectDb  from "./database/db.js";
import userRoute from "./routes/user.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config({});
const app  = express();
//call database connnect
connectDb();
const PORT =  process.env.PORT ||3000;
//default api

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));

//API 
app.use("/api/v1/user",userRoute); 

app.listen(PORT,()=>{
    console.log(`server listen on port ${PORT}`);
});
