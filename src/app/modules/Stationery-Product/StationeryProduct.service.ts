import { TProduct } from './StationeryProduct.interface';
import { Product } from './StationeryProduct.model';

const createProductIntoDB = async (productData: TProduct) => {
  const result = await Product.create(productData);
  return result;
};

const getAllProductFromDB = async () => {
  const result = await Product.find();
  return result;
};

const getSpecificProductFromDB = async (ProductId: string) => {
  const result = await Product.findById(ProductId);
  return result;
};

export const ProductService = {
  createProductIntoDB,
  getAllProductFromDB,
  getSpecificProductFromDB,
};
