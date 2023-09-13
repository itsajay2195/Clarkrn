import {api} from './config';

export const fetchProducts = async (skip = 0) => {
  try {
    const response = await api.get(`/products?limit=${20}&skip=${skip}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
