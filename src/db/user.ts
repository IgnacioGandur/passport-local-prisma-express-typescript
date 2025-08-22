import client from "./client.js";
import { type PrismaClient } from "../generated/prisma/client.js";

class User {
    prisma: PrismaClient;
    constructor(prisma: PrismaClient) {
        this.prisma = prisma;
    }

    // NOTE: Write your User queries here.
}

export default new User(client);
