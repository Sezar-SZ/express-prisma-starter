import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";

import * as middlewares from "./middlewares";
import api from "./api";

require("dotenv").config();

const app = express();

const corsConfig = {
    origin: true,
    credentials: true,
};

app.use(morgan("dev"));
app.use(helmet());
app.use(cors(corsConfig));
app.use(express.json());
app.use(cookieParser());

app.options("*", cors(corsConfig));

app.get("/", (req, res) => {
    res.json({
        "server-status": "running",
    });
});

app.use("/api", api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
