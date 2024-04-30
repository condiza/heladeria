import { Router } from "express";
import { getUsers } from "../controllers/userController/GetUsers.Controller";
import { createUser } from "../controllers/userController/CreateUse.Controller";
import { getUser } from "../controllers/userController/GetUser.Controller";
import { deleteUser } from "../controllers/userController/DeleteUser.Controller";
import { updateUser } from "../controllers/userController/UpdateUser.Controller";

const routes = Router();

routes.route('/')
    .get(getUsers)
    .post(createUser)

routes.route('/:userId')
    .get(getUser)
    .delete(deleteUser)
    .put(updateUser)

export default routes;