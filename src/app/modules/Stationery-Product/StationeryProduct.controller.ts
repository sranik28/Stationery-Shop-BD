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
    HandelApiSuccess(res, 201, 'Product are retrieved successfully', result);
  } catch (error) {
    HandelApiError(res, 500, 'Something went wrong', error);
  }
};

const getSpecificProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductService.getSpecificProductFromDB(productId);

    HandelApiSuccess(res, 201, 'Product retrieved successfully', result);
  } catch (error) {
    HandelApiError(res, 500, 'Failed to retrieve product', error);
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const body = req.body;
    const result = await ProductService.updateProductFromDB(productId, body);

    HandelApiSuccess(res, 201, 'Product updated successfully!', result);
  } catch (error) {
    HandelApiError(res, 500, 'Failed to update product', error);
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    await ProductService.deleteProductFromDB(productId);
    HandelApiSuccess(res, 201, 'Product deleted successfully!', null);
  } catch (error) {
    HandelApiError(res, 500, 'Failed to delete product', error);
  }
};

export const ProductController = {
  createProduct,
  getProduct,
  getSpecificProduct,
  deleteProduct,
  updateProduct,
};
