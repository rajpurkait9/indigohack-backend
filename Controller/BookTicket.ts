import { Request, Response, NextFunction } from "express";
import BookTicketSchema from "../Modals/BookTicketSchema";

export const BookTickets = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const ticketBook = await BookTicketSchema.create(req.body);
    res.status(200).json(ticketBook);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const GetFlightDetails = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.status(200).json("flight");
  } catch (error: any) {
    res.status(500).json(error);
  }
};

export const confirmationMessage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const allFlight = await BookTicketSchema.find({});
    res.status(200).json(allFlight);
  } catch (error: any) {
    res.status(500).json(error);
  }
};

export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
  } catch (error) {
    res.status(500).send(error);
  }
};
