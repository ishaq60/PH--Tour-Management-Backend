import express from "express"
import { userRoutes } from "./app/modules/user/user.route"
const app=express()
import cors from "cors"
app.use(express.json())
app.use(cors())
app.use("/api/v1/user",userRoutes)
app.get("/",(req,res)=>{
    res.status(200).json({
        messge:"Welcome to Tour Management System Backend"
    })
})
export default app