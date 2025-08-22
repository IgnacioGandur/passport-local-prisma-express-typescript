import { type Request, type Response } from "express";

const notFoundController = {
    notFound: (_req: Request, res: Response) => {
        res.status(404).json({
            success: false,
            msesage: "Route not found.",
        })
    }
}

export default notFoundController;
