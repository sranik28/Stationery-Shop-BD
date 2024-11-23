import { Request, Response } from 'express';
import { ProductService } from './StationeryProduct.service';

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const result = await ProductService.createProductIntoDB(product);
    res.status(200).json({
      success: true,
      message: 'Product is created successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: error,
    });
  }
};

const getProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductService.getAllProductIntoDB();
    res.status(200).json({
      success: true,
      message: 'Product are retrieved successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: error,
    });
  }
};

export const ProductController = {
  createProduct,
  getProduct,
};
