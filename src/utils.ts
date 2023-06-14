import { NextFunction, Request, Response } from "express";

type UnlessConditions = [path: string, method: "POST" | "GET"];

export function unless(
    unlessConditions: UnlessConditions,
    middleware: (req: Request, res: Response, next: NextFunction) => any
) {
    const [path, method] = unlessConditions;
    return function (req: Request, res: Response, next: NextFunction) {
        if (path === req.path && method === req.method) {
            return next();
        } else {
            return middleware(req, res, next);
        }
    };
}
