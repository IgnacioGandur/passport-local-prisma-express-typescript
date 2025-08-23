import { PrismaClient } from "../generated/prisma/client.js";

// Set the client's database URL programatically based on the NODE_ENV.
const client = new PrismaClient({
    datasources: {
        db: {
            url: process.env.NODE_ENV === "test"
                ? process.env.TEST_DATABASE_URL
                : process.env.DATABASE_URL
        }
    }
});

export default client;

