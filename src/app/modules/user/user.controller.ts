/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import { User } from "./user.model";
import httpstatus from "http-status-codes"
import { userServices } from "./user.service";
const createUser=async(req:Request,res:Response,next:NextFunction)=>{
try{
const user=await userServices.createUser
res.status(httpstatus.CREATED).json({
    message:"user create successfully",user
})
}
catch(err:any){
console.log(err)
next(err)
}
}

export const userController={
    createUser
}