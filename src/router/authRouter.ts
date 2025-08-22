import { type Request, type Response, type NextFunction } from "express";
import { Router } from "express";
import passport from "passport";
import authController from "../controllers/authController.js";

const authRouter = Router();

authRouter
    .route("/login")
    .post(
        passport.authenticate("local"),
        authController.login)

authRouter
    .route("/register")
    .post(authController.register);

authRouter
    .route("/logout")
    .all(authController.logout);

// Test if Passport is protecting routes here:
authRouter
    .route("/protected-route")
    .all((req: Request, res: Response, next: NextFunction) => {
        if (!req.isAuthenticated()) {
            return res.status(422).json({
                success: false,
                message: "Unauthorized.",
            })
        }

        return next();
    }, (_req: Request, res: Response) => {
        res.json({
            success: true,
            message: "Protected route reached!",
        });
    });

export default authRouter;
