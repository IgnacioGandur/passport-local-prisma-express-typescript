import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (_req, res) => {
    res.json({
        success: true,
        message: "Root route reached",
    })
})

export default app;
