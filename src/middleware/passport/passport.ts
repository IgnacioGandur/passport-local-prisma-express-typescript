import passport from "passport";
import strategy from "./strategy.js";
import { User } from "../../generated/prisma/index.js";
import userModel from "../../db/user.js";

passport.use(strategy);

passport.serializeUser((user, done) => {
    const u = user as User;
    return done(null, { id: u.id, username: u.username });
});

passport.deserializeUser(async (user: { id: string | number, usernaem: string }, done) => {
    try {
        const u = await userModel.getUserById(user.id);
        return done(null, u);
    } catch (error) {
        return done(error);
    }
})
