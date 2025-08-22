import { type Request, type Response } from "express";

const indexController = {
    indexGet: (_req: Request, res: Response) => {
        return res.json({
            success: true,
            message: "Root route reached.",
        })
    }
}

export default indexController;
