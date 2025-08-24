import test_client from "../../db/test_client.js";
import bcrypt from "bcryptjs";

const createUser = async (username: string, password: string): Promise<void> => {

    // Get user if exists.
    const user = await test_client.user.findUnique({
        where: {
            username
        }
    });

    if (user) {
        return;
    } else {
        const hashedPassword = await bcrypt.hash(password, 10);
        await test_client.user.create({
            data: {
                username,
                password: hashedPassword
            }
        })
    }
};

export default createUser;
