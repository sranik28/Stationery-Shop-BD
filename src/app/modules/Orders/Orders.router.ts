
import express from "express";
import { OrdersController } from "./Orders.controller";

const router = express.Router();

router.post("/", OrdersController.createOrder);


export const OrderRouters = router;

