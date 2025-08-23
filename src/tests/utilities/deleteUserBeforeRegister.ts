import userModel from "../../db/user.js";

const deleteUserBeforeRegister = async (username: string): Promise<void> => {
    const user = await userModel.getUserByUsername(username);
    if (user) {
        await userModel.deleteUserByUsername(username);
    };
};

export default deleteUserBeforeRegister;
