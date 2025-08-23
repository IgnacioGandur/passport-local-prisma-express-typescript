import { describe, it, expect } from "vitest";
import supertest from "supertest";
import app from "../app.js";

// Utilities
import deleteUserBeforeRegister from "./utilities/deleteUserBeforeRegister.js";
import createUser from "./utilities/createUser.js";

describe("Auth Router", () => {
    it("POST | Should register a new user.", async () => {
        await deleteUserBeforeRegister("foo");
        const response = await supertest(app)
            .post("/auth/register")
            .type("form")
            .send({
                username: "foo",
                password: "bar"
            })
            .expect(200)
            .expect("Content-Type", /json/);
        expect(response.body.success).toBe(true);
        expect(response.body.message).toBe("User registered correctly!");
        expect("user" in response.body).toBe(true);
    });

    it("POST | Should login the user.", async () => {
        await createUser("bar", "foo");
        const response = await supertest(app)
            .post("/auth/login")
            .type("form")
            .send({
                username: "bar",
                password: "foo"
            })
            .expect(200)
            .expect("Content-Type", /json/);
        expect(response.body.success).toBe(true);
        expect(response.body.message).toBe("User logged successfully!");
        expect("user" in response.body).toBe(true);

        // Check if cookie session was created.
        const cookieRegex = /connect\.sid/gi;
        const cookiesArray = response.header["set-cookie"] as unknown as string[];
        const cookieExists = cookiesArray.some(cookie => cookie.match(cookieRegex));
        expect(cookieExists).toBe(true);
    });

    it("GET | Prohibit access to protected route.", async () => {
        const response = await supertest(app)
            .get("/auth/protected-route")
            .expect(401)
            .expect("Content-Type", /json/);
        expect(response.body.success).toBe(false);
        expect(response.body.message).toBe("Unauthorized.");
    });

    it("GET | Should allow access to protected route after login.", async () => {
        await createUser("bar", "foo");
        const agent = supertest.agent(app);

        await agent
            .post("/auth/login")
            .type("form")
            .send({
                username: "bar",
                password: "foo",
            })
            .expect(200)
            .expect("Content-Type", /json/);

        const response = await agent
            .get("/auth/protected-route")
            .expect(200)
            .expect("Content-Type", /json/);
        expect(response.body.success).toBe(true);
        expect(response.body.message).toBe("Protected route reached!");
    })
});

