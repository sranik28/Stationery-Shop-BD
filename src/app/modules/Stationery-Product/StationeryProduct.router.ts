import express from 'express';
import { ProductController } from './StationeryProduct.controller';

const router = express.Router();

router.get('/:productId', ProductController.getSpecificProduct);
router.get('/', ProductController.getProduct);
router.post('/', ProductController.createProduct);
router.delete('/:productId', ProductController.deleteProduct);
router.put('/:productId', ProductController.updateProduct);

export const ProductRouters = router;
