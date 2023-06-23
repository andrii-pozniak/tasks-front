import axios from 'axios';

export const fetchTasksData = async () => {
    try {

      const response = await axios.get('/tasks');
      return response.data;
    } catch (error) {
    }
  };

  export const addTask = async (newTask) => {
    try {
        console.log("newTask", newTask)
      const response = await axios.post("/tasks/create", newTask);
      return response.data;
    } catch (error) {
      console.error("Failed to update Data:", error);
      throw error;
    }
  };

  export const deleteTask = async (categoryId) => {
    try {
      const response = await axios.delete(`/tasks/${categoryId}`);
      return response.data;
    } catch (error) {
      console.error("Failed to delete category:", error);
      throw error;
    }
  };

  export const updateTask = async (categoryId, newName) => {
    try {
      const response = await axios.put(`/tasks/${categoryId}`, { name: newName });
      return response.data;
    } catch (error) {
      console.error("Failed to update category:", error);
      throw error;
    }
  };