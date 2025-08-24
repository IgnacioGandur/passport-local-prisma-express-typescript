import test_client from "../../db/test_client.js";

const deleteUserBeforeRegister = async (username: string): Promise<void> => {
    const user = await test_client.user.findUnique({
        where: {
            username
        }
    })

    if (user) {
        await test_client.user.delete({
            where: {
                username
            }
        })
    };
};

export default deleteUserBeforeRegister;
