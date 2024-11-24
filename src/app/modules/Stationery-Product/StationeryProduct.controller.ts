import { Request, Response } from 'express';
import { ProductService } from './StationeryProduct.service';
// import { stationeryProductSchema } from './StationeryProduct.validation';
import { HandelApiSuccess } from '../../../utils/HandelApiSuccess';
import { HandelApiError } from '../../../utils/HandelApiError';

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    // const zodValidation = stationeryProductSchema.parse(product);
    const result = await ProductService.createProductIntoDB(product);
    HandelApiSuccess(res, 201, 'Product created successfully!', result);
  } catch (error) {
    HandelApiError(res, 500, 'Failed to create product', error);
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
      message: 'Product update successfully',
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

const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const body = req.body;
    const result = await ProductService.updateProductFromDB(productId, body);

    res.status(200).json({
      success: true,
      message: 'Product  deleted successfully',
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

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    await ProductService.deleteProductFromDB(productId);

    res.status(200).json({
      success: true,
      message: 'Product deleted successfully',
      data: {},
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
  deleteProduct,
  updateProduct,
};
