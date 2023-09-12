import {api} from './config';

export const fetchProducts = async () => {
  try {
    const response = await api.get('/products');
    return response.data;
  } catch (error) {
    throw error;
  }
};
