import express from "express";
import dotenv from "dotenv";
import githubRoutes from "./routes/githubRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());

// Routes
app.use("/api/github", githubRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}`);
});
