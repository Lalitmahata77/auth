import express from "express"
import dotenv from "dotenv"
import connectMongoDb from "./config/dbConnect.js"
import cookieParser from "cookie-parser"
const app = express()

dotenv.config({path : "server/config/config.env"})
const PORT = process.env.PORT || 4000
app.use(express.json())
app.use(cookieParser())

import userRouter from "./route/userRoute.js"
app.use("/api/v2", userRouter)
app.listen(PORT, ()=>{
    connectMongoDb()
    console.log(`server is listening on port ${PORT}`);
})