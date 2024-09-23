import express from "express";
import cookieParser from "cookie-parser";
import cors from 'cors'
import { userRouter } from "./routes/user.routes.js";

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit:"16kb"})) // form data come to server
app.use(express.urlencoded({extended: true,limit:"16kb"})) // url data come to my code
app.use(express.static("public"))
app.use(cookieParser())


// routes declartion 
app.use("/api/v1/users", userRouter)

export  {app}