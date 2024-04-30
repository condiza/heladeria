import { Router } from 'express';
import { updateOrderDetails } from '../controllers/oderDetailsController/UpdateOrderDetails.Controller';
import { getOrdersDetails } from '../controllers/oderDetailsController/GetOrdersDetails.Controller';
import { createOrderDetails } from '../controllers/oderDetailsController/CreateOrderDetails.Controller';
import { getOrderDetails } from '../controllers/oderDetailsController/GetOrderDetails.Controller';
import { deleteOrderDetails } from '../controllers/oderDetailsController/DeleteOrderDetails.Controller';

const routes = Router();

routes.route('/')
    .get(getOrdersDetails)
    .post(createOrderDetails)

routes.route('/:orderdId')
    .get(getOrderDetails)
    .delete(deleteOrderDetails)
    .put(updateOrderDetails)

export default routes;
