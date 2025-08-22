import bcrypt from "bcryptjs";
import userModel from "../../db/user.js";
import { Strategy as LocalStrategy } from "passport-local";

const strategy = new LocalStrategy(async (username, password, done) => {
    try {
        const user = await userModel.getUserByUsername(username);

        if (!user) {
            return done(null, false);
        }

        const passwordsMatch = await bcrypt.compare(password, user.password);

        if (!passwordsMatch) {
            return done(null, false);
        }

        return done(null, user!);
    } catch (error) {
        return done(error);
    }
})

export default strategy;
