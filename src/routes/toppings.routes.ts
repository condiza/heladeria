import { Router } from "express";
import { updateTopping } from "../controllers/toppingsController/UpdateToppings.controller";
import { getToppings } from "../controllers/toppingsController/GetToppings.Controller";
import { createTopping } from "../controllers/toppingsController/CreateTopping.Controller";
import { getTopping } from "../controllers/toppingsController/GetTopping.Controller";
import { deleteTopping } from "../controllers/toppingsController/DeleteTopping.Controller";


const routes = Router();

routes.route('/')
    .get(getToppings)
    .post(createTopping)

routes.route('/:toppingId')
    .get(getTopping)
    .delete(deleteTopping)
    .put(updateTopping)

export default routes;