import axios from 'axios';

export const fetchCategoriesData = async () => {
    try {

      const response = await axios.get('/categories');
      console.log("response", response)
      return response.data;
    } catch (error) {
    }
  };

export const deleteCategory = async (categoryId) => {
    try {
      const response = await axios.delete(`/categories/${categoryId}`);
      console.log("response", response);
    } catch (error) {
      console.error("Failed to delete category:", error);
      throw error;
    }
  };

  export const updateCategory = async (categoryId, newName) => {
    try {
      const response = await axios.put(`/categories/${categoryId}`, { name: newName });
      console.log("response", response);
    } catch (error) {
      console.error("Failed to update category:", error);
      throw error;
    }
  };

  export const addCategory = async (newCategory) => {
    try {
        console.log("first", newCategory)
      const response = await axios.post("/categories/create", newCategory);
      console.log("response", response);
    } catch (error) {
      console.error("Failed to update Data:", error);
      throw error;
    }
  };