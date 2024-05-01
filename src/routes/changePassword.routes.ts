import { Router } from "express";
import { changePassword } from "../controllers/ChangePasswor/ChangePassword.Controller";

const routes = Router();

    routes.route('/')
    .post(changePassword)


export default routes;