import { Router } from "express";
import notFoundController from "../controllers/notFoundController.js";

const notFoundRouter = Router();

notFoundRouter.use(notFoundController.notFound);

export default notFoundRouter;
