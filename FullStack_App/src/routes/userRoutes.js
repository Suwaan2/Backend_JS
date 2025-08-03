import { Router } from "express";
import { registerUser } from "../controllers/usercontroller.js";

const userRouter = Router()

userRouter.route("/register").post(registerUser)


export default userRouter