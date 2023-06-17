import axios from 'axios';

export const getCategories = async () => {
    try {
      const response = await axios.get('/categories');
      return response.data;
    } catch (error) {
    }
  };