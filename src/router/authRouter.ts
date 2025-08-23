import { type Request, type Response, type NextFunction } from "express";
import { Router } from "express";
import passport from "passport";
import authController from "../controllers/authController.js";

// Validators
import validateUserRegister from "../middleware/validators/auth/validateUserRegister.js";
import validateUserLogin from "../middleware/validators/auth/validateUserLogin.js";

const authRouter = Router();

authRouter
    .route("/login")
    .post(
        validateUserLogin,
        passport.authenticate("local"),
        authController.login)

authRouter
    .route("/register")
    .post(
        validateUserRegister,
        authController.register
    );

authRouter
    .route("/logout")
    .all(authController.logout);

// NOTE: Test if Passport is protecting routes here... Delete this after checking that Passport works correctly.
authRouter
    .route("/protected-route")
    .all((req: Request, res: Response, next: NextFunction) => {
        if (!req.isAuthenticated()) {
            return res.status(401).json({
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
