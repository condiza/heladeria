import { Router } from "express";
import { updateOrder } from "../controllers/ordersController/UpdateOrder.controller";
import { getOrders } from "../controllers/ordersController/GetOrders.Controller";
import { createOrder } from "../controllers/ordersController/CreateOrder.Controller";
import { getOrder } from "../controllers/ordersController/GetOder.Controller";
import { deleteOrder } from "../controllers/ordersController/DeleteOrder.Controller";


const routes = Router();

routes.route('/')
    .get(getOrders)
    .post(createOrder)

routes.route('/:ordersId')
    .get(getOrder)
    .delete(deleteOrder)
    .put(updateOrder)

export default routes;