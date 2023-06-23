import axios from 'axios';

export const fetchCategoriesData = async () => {
    try {

      const response = await axios.get('/categories');
      return response.data;
    } catch (error) {
    }
  };



export const deleteCategory = async (categoryId) => {
    try {
      const response = await axios.delete(`/categories/${categoryId}`);
      return response.data;
    } catch (error) {
      console.error("Failed to delete category:", error);
      throw error;
    }
  };

  export const updateCategory = async (categoryId, newName) => {
    try {
      const response = await axios.put(`/categories/${categoryId}`, { name: newName });
      return response.data;
    } catch (error) {
      console.error("Failed to update category:", error);
      throw error;
    }
    
  };

  export const addCategory = async (newCategory) => {
    try {
      const response = await axios.post("/categories/create", newCategory);
      return response.data;
    } catch (error) {
      console.error("Failed to update Data:", error);
      throw error;
    }
  };

  export const addTask = async (newTask) => {
    try {
      const response = await axios.post("/tasks/create", newTask);
      return response.data;
    } catch (error) {
      console.error("Failed to update Data:", error);
      throw error;
    }
  };