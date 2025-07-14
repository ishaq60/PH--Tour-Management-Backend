/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { User } from "./user.model";
import httpstatus from "http-status-codes"
const createUser=async(req:Request,res:Response)=>{
try{
const {name,email}=req.body
const user=await User.create({
    name,
    email
})
res.status(httpstatus.CREATED).json({
    message:"user create successfully",user
})
}
catch(err:any){
console.log(err)
res.status(400).json({
    message:`something went wrong! ${err.message}`
})
}
}

export const userController={
    createUser
}