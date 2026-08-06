import type { NextFunction, Request, Response } from "express";
import type { AnyZodObject } from "zod/v3";


export const requestBodyValidation = (schema:AnyZodObject)=>async(req:Request,res:Response,next:NextFunction)=>{
  try {
    await schema.parseAsync(req.body)
    console.log(`Validation Passed`);
    next()
  } catch (error) {
    return res.status(400).json({
      message:`Invalid Schema Object`,
      status:false,
      error:error
    })
  }
}