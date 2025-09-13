import express, { NextFunction } from "express"
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


import { Request, Response, NextFunction } from 'express';

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err); // optional: logs the error for debugging

    res.status(500).json({
        success: false,
        message: "Something went wrong", // grammar fix
        error: err.message || err // optional: return error message
    });
});




export default app