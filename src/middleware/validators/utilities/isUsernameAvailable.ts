import userModel from "../../../db/user.js";

const isUsernameAvailable = async (username: string, shouldExist: boolean): Promise<boolean | Error> => {
    const user = await userModel.getUserByUsername(username);

    if (user && !shouldExist) {
        throw new Error(`The username: ${username} is already taken, please try another one.`);
    }

    if (!user && shouldExist) {
        throw new Error(`The user: ${username} doesn't exist.`);
    }

    return true;
};

export default isUsernameAvailable; 
