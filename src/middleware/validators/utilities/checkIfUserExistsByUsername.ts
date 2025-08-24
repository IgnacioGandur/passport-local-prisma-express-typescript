import userModel from "../../../db/user.js";

const checkIfUserExistsByUsername = async (username: string): Promise<void | boolean> => {
    const user = await userModel.getUserByUsername(username);

    if (!user) {
        throw new Error(`The user: '${username}' doesn't exist.`);
    }

    return true;
}

export default checkIfUserExistsByUsername;
