import type { NextFunction, Request, Response } from "express";

export function middleware1(req:Request,res:Response,next:NextFunction){
  console.log("Middleware 1 is Working Fine");
  next()
}