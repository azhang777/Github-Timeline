import express from "express";
import dotenv from "dotenv";
import githubRoutes from "./router/usersRouter.js";
const app = express();

app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}`);
});

// Routes
app.use("/api/github", githubRoutes);
