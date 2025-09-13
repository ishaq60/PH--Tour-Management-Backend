/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import httpstatus from "http-status-codes";
import { userServices } from "./user.service";
import sendResponse from "../../utils/SendResponse";


const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await userServices.createUser(req.body);

    sendResponse(res, {
      statusCode: httpstatus.CREATED,
      success: true,
      message: "User created successfully",
      data: user,
    });
  } catch (err: any) {
    next(err);
  }
};

const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await userServices.getAllUsers();

    sendResponse(res, {
      statusCode: httpstatus.OK,
      success: true,
      message: "All users retrieved successfully",
      data: users,
      meta: { total: users.length }, // optional meta field
    });
  } catch (error: any) {
    next(error);
  }
};

export const userController = {
  createUser,
  getAllUsers,
};
