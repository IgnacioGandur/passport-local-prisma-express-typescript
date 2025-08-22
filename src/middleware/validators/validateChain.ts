import { validationResult } from "express-validator";
import { type Request, type Response, type NextFunction, type RequestHandler } from "express";

const validateChain = (validationChain: RequestHandler | RequestHandler[]): RequestHandler[] => {
    const chainArray = Array.isArray(validationChain) ? validationChain : [validationChain];
    const checkChain: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
        const validationErrors = validationResult(req);

        if (!validationErrors.isEmpty()) {
            return res.status(422).json({
                success: false,
                message: "Something is wrong with the inputs you provided, please correct them: ",
                errors: validationErrors.array(),
            })
        };

        return next();
    };
    return [...chainArray, checkChain];
}

export default validateChain;
