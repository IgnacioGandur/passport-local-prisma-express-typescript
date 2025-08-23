import { PrismaClient } from "../../generated/prisma/client.js";
import bcrypt from "bcryptjs";

const createUser = async (username: string, password: string): Promise<void> => {
    const client = new PrismaClient();

    // Get user if exists.
    const user = await client.user.findUnique({
        where: {
            username
        }
    });

    if (user) {
        return;
    } else {
        const hashedPassword = await bcrypt.hash(password, 10);
        await client.user.create({
            data: {
                username,
                password: hashedPassword
            }
        })
    }
};

export default createUser;
