import express, { Request, Response } from "express";

const router = express.Router();

router.get("/hello", (req: Request, res: Response) => {
  res.json({ message: "hello from API" });
});

export default (): express.Router => {
  return router;
};
