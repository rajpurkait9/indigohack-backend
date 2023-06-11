import express, { Application } from "express";
import bookTicket from "./Routes/BookTicket.routes";
import { config } from "dotenv";
import connectMongo from "./DB/connectMongo";
import cors from "cors";
config();

const app: Application = express();

// middleware
app.use(express.json());
app.use(cors());

// routes
app.use("/api/v1", bookTicket);

const port = 9000;
const StartServer = () => {
  try {
    connectMongo(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`connect to the port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

StartServer();
