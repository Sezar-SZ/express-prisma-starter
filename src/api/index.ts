import express from "express";
import { Request, Response } from "express";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
    res.json({ message: "Hello, World!" });
});
export default router;
