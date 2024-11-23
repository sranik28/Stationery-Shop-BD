
import express from "express";
import { OrdersController } from "./Orders.controller";

const router = express.Router();

router.post("/", OrdersController.createOrder);
router.get("/revenue", OrdersController.revenue);


export const OrderRouters = router;

