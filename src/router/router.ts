import { Router } from "express";
import indexRouter from "./indexRouter.js";
import authRouter from "./authRouter.js";
import notFoundRouter from "./notFoundRouter.js";

const router = Router({ mergeParams: true });

router.use("/", indexRouter);
router.use("/auth", authRouter);

// 404
router.use(notFoundRouter);

export default router;
