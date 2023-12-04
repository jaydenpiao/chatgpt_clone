import { Router } from "express";
import appRouter from "./index.js";
import { getAllUsers } from "../contollers/user-controllers.js";

const userRoutes = Router();

userRoutes.get("/", getAllUsers)

export default userRoutes;