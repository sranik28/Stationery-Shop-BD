import express from 'express';
import { ProductController } from './StationeryProduct.controller';

const router = express.Router();

router.post("/create-product",ProductController.createProduct)
router.get("/:productId",ProductController.getSpecificProduct)
router.get("/",ProductController.getProduct)

export const ProductRouters = router;
