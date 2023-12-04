import { Router } from "express";
import appRouter from "./index.js";

const userRoutes = Router();

appRouter.use("/user", userRoutes);

export default userRoutes;