
import { Router } from "express";
import { BookTickets } from "../Controller/BookTicket";

const bookTicket  = Router();

bookTicket.post('/book', BookTickets);

export default bookTicket;