import userModel from "../../../db/user.js";

const checkIfUsernameIsAvailable = async (username: string): Promise<void | boolean> => {
    const user = await userModel.getUserByUsername(username);

    if (user) {
        throw new Error(`The username: '${username}' is already taken, please try another one.`);
    }

    return true;
}

export default checkIfUsernameIsAvailable;
