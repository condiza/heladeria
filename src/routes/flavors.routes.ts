import { Router } from "express";
import { updateFlavor } from "../controllers/flavorController/UpdateFlavor.Controller";
import { getFlavors } from "../controllers/flavorController/GetFlavors.Controller";
import { createFlavor } from "../controllers/flavorController/CreateFlavor.Controller";
import { getFlavor } from "../controllers/flavorController/GetFlavor.Controller";
import { deleteFlavor } from "../controllers/flavorController/DeleteFlavor.Controller";

const routes = Router();

    routes.route('/')
    .get(getFlavors)
    .post(createFlavor)


routes.route('/:flavorId')
    .get(getFlavor)
    .delete(deleteFlavor)
    .put(updateFlavor)

export default routes;