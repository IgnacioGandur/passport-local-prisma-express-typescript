import dotenv from "dotenv";
import { execSync } from "child_process";

//NOTE: Run tests on the test databse.
dotenv.config();
process.env.DATABASE_URL = process.env.TEST_DATABASE_URL;

execSync("npx prisma migrate reset --force", { stdio: "inherit" });
