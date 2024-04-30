import { Router } from "express";
import {indexWelcome} from '../controllers/indenxController/Index.Controller'

const router = Router();

router.route('/')
    .get(indexWelcome);

export default router;