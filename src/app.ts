import express from "express"
const app=express()

app.get("/",(req,res)=>{
    res.status(200).json({
        messge:"Welcome to Tour Management System Backend"
    })
})
export default app