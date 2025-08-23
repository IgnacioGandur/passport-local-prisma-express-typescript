import { describe, it, expect } from "vitest";
import supertest from "supertest";
import app from "../app.js";

describe("Index Router", () => {
    it("GET | Should reach the index route", async () => {
        const response = await supertest(app)
            .get("/")
            .expect(200)
            .expect("Content-Type", /json/);
        expect(response.body.success).toBe(true);
        expect(response.body.message).toBe("Root route reached.");
    });
});
