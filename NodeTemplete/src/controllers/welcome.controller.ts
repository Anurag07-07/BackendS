import type { Request, Response } from "express";

export const WelcomeHandler = async(req:Request,res:Response)=>{
   res.send("<h1>Welcome Home</h1>")
}