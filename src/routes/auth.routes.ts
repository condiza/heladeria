import { Router } from "express";
import { authValidate } from "../controllers/authController/auth.controller";

const routes = Router();

routes.route('/')
    .post(authValidate)

export default routes;