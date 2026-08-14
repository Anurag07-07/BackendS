import { NextFunction, Request, Response } from "express";
import { createHotelService, getAllHotelsService, getHotelByIdService } from "../services/hotel.service";
import { StatusCodes } from "http-status-codes";

export async function createHotelHandler(req:Request,res:Response,next:NextFunction){
  //1. Call the Service layer  
    const hotel = await createHotelService(req.body);
    
  //2. Send the response
    res.status(StatusCodes.CREATED).json({
      message:`Hotel created successfully`,
      data:hotel,
      success:true
    })    
}

export async function getHotelByIdHandler(req:Request,res:Response,next:NextFunction) {
  const hotelResponse = await getHotelByIdService(Number(req.params.id))
  res.status(StatusCodes.OK).json({
    message:`Hotel found Successfully`,
    data:hotelResponse,
    success:true
  })
}


export async function getAllHotelHandler(req:Request,res:Response,next:NextFunction) {
  //1. Call the Service Layer
  const hotelsResponse = await getAllHotelsService();

  res.status(StatusCodes.OK).json({
    message:`Hotels found Successfully`,
    data:hotelsResponse,
    success:true
  });
}

export async function deleteHotelHandler(req:Request,res:Response,next:NextFunction) {
  res.status(StatusCodes.NOT_IMPLEMENTED).json({

  });
}
export async function updateHotelHandler(req:Request,res:Response,next:NextFunction) {
  res.status(StatusCodes.NOT_IMPLEMENTED).json({

  });
}