import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import taksRoutes from "./routes/tasks.routes.js";


const app = express();

app.use(cors());

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use("/api",authRoutes);
app.use("/api", taksRoutes);

export default app;
