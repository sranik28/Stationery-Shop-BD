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
    const result = await ProductService.getAllProductFromDB();
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

const getSpecificProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductService.getSpecificProductFromDB(productId);
    
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
  getSpecificProduct,
};
