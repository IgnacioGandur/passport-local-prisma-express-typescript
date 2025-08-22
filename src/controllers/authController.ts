import { NextFunction, type Request, type Response } from "express";
import bcrypt from "bcryptjs";
import user from "../db/user.js";
import { send } from "process";

interface RegisterRequestBody {
    username: string;
    password: string;
};

const authController = {
    login: (req: Request, res: Response) => {
        return res.json({
            success: true,
            message: "User logged successfully!",
            user: req.user,
        })
    },

    register: async (req: Request<{}, {}, RegisterRequestBody>, res: Response) => {
        try {
            const {
                username,
                password
            } = req.body;
            const hashedPassword = await bcrypt.hash(password, 10);
            const registeredUser = await user.createUser(username, hashedPassword);
            return res.json({
                success: true,
                message: "User registered correctly!",
                user: registeredUser,
            });
        } catch (error) {
            console.error("Controller error:", error);
            return res.status(500).json({
                success: false,
                message: "Server error. We were not able to register a new user.",
            })
        }
    },

    logout: (req: Request, res: Response, next: NextFunction) => {
        req.logout((error) => {
            if (error) {
                return next(error);
            };

            // Clear session cookie after logout.
            req.session.destroy((error) => {
                if (error) {

                    return next(error);
                }

                res.clearCookie("connect.sid");
                return res.json({
                    success: true,
                    message: "User logged out successfully!"
                });
            })
        })
    },
}

export default authController;
