import { NextFunction, Request, Response } from "express";
import { envVars } from "../config/env";

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // allow services/controllers to set statusCode
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    message: err.message || "Something went wrong",
    error: err, // full error object
    stack: envVars.NODE_ENV === "development" ? err.stack : null,
  });
};
