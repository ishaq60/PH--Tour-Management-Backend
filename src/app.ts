import httpstatus from "http-status-codes";
import express, { NextFunction, Request, Response } from "express"
import { userRoutes } from "./app/modules/user/user.route"
const app=express()
import cors from "cors"
import { globalErrorHandler } from "./app/middleware/Golbalerrorhandaler"
import { notFound } from "./app/middleware/RouteNotfound";
app.use(express.json())
app.use(cors())
app.use("/api/v1/user",userRoutes)
app.get("/",(req,res)=>{
    res.status(200).json({
        messge:"Welcome to Tour Management System Backend"
    })
})



app.use(globalErrorHandler)

//not found routes
app.use(notFound)


export default app