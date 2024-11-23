import express from 'express';
import { ProductController } from './StationeryProduct.controller';

const router = express.Router();

router.post("/create-product",ProductController.createProduct)
router.get("/",ProductController.getProduct)

export const ProductRouters = router;
