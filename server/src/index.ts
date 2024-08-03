import express, { Request, Response } from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";
import router from "./routes";
import "dotenv/config";
import { Octokit } from "@octokit/rest";

const app = express();

app.use(
  cors({
    credentials: true,
  })
);
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Github Timeline");
});

const server = http.createServer(app);

server.listen(process.env.PORT, () => {
  console.log(`Server is running at http://localhost:${process.env.PORT}`);
});

const MONGO_URL = `mongodb+srv://${process.env.MY_USERNAME}:${process.env.MY_PASSWORD}@express.mkucxcv.mongodb.net/?retryWrites=true&w=majority&appName=express`;

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);

mongoose.connection.on("error", (error: Error) => console.log(error));

app.use("/", router());
