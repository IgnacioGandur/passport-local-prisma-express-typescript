import express from "express";
import passport from "passport";
import router from "./router/router.js";
import session from "express-session";
import { PrismaClient } from "./generated/prisma/client.js";
import { PrismaSessionStore } from "@quixo3/prisma-session-store";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: true })) // NOTE: Change the origin accordingly to your front-end.
app.use(session({
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days cookie.
        httpOnly: true,
        sameSite: "none",
    },
    secret: String(process.env.SESSION_SECRET),
    resave: false,
    saveUninitialized: false,
    store: new PrismaSessionStore(
        new PrismaClient(),
        {
            checkPeriod: 1000 * 60 * 3, // Check every 3 minutes.
            dbRecordIdIsSessionId: true,
            dbRecordIdFunction: undefined,
        }
    )
}));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

import "./middleware/passport/passport.js";

app.use(router);

export default app;
