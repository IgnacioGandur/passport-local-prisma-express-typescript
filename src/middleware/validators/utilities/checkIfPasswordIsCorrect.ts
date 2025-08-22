import { type Meta } from "express-validator";
import userModel from "../../../db/user.js";
import bcrypt from "bcryptjs";

const checkIfPasswordIsCorrect = async (
    username: string,
    { req }: Meta): Promise<boolean | Error> => {
    const { password } = req.body;
    const user = await userModel.getUserByUsername(username);
    const isPasswordCorrect = await bcrypt.compare(password, user!.password);

    if (!isPasswordCorrect) {
        throw new Error("The password is not correct.");
    }

    return true;
}

export default checkIfPasswordIsCorrect;
