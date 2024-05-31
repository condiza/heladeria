import { Router } from "express";
import { authValidate } from "../controllers/authController/auth.controller";
import { validator, validatorParams } from '../middleware/auth/auth'; 

const routes = Router();

routes.route('/')
    .post(validatorParams,validator, authValidate)

export default routes;
