import { TProduct } from './StationeryProduct.interface';
import { Product } from './StationeryProduct.model';

const createProductIntoDB = async (productData: TProduct) => {
  const result = await Product.create(productData);
  return result;
};

const getAllProductIntoDB = async () => {
  const result = await Product.find();
  console.log(result);
  return result;
};

export const ProductService = {
  createProductIntoDB,
  getAllProductIntoDB,
};
