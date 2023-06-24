import React, { useState, useEffect } from "react";
import { ModalSample } from "../../Modal/Modal";
import { TaskForm } from "../TaskForm/TaskForm";
import { useParams, useLocation } from "react-router-dom";
import { fetchTasksData, addTask, deleteTask } from "../../utils/getTasks";

import {
  CategoryItemsBody,
  Button,
} from "components/Categories/CategoryList/CategoryList.style";
import { CardContainer } from "./TaskList.style";
import { TaskItem } from "../TaskItem/TaskItem";
import { updateTask } from "../../utils/getTasks";

export const TasksList = () => {
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [data, setData] = useState(null);
  const [, setStatus] = useState("pending");
  const { id } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const categoryName = searchParams.get("categoryName");

  const [newTask, setNewTask] = useState({
    name: "",
    description: "",
    dataStart: "",
    dataEnd: "",
  });

  const toggleModalAdd = () => {
    setShowModalAdd(!showModalAdd);
    document.body.style.overflow = "";
  };

  const onChangeModalAdd = () => {
    toggleModalAdd();
  };

  useEffect(() => {
    const fetchData = async (id) => {
      try {
        setStatus("pending");
        const data = await fetchTasksData();
        const filteredData = data.filter((item) => item.id === id);
        setStatus("fulfilled");
        setData(filteredData);
      } catch {
        setStatus("rejected");
      }
    };

    fetchData(id);
  }, [id]);

  useEffect(() => {
    if (newTask) {
      setData((prevData) => {
        if (prevData) {
          return [...prevData, newTask];
        } else {
          return [newTask];
        }
      });
    }
  }, [newTask]);

  const handleAddTask = async (newTask) => {
    try {
      await addTask({ ...newTask, id });
      setNewTask({ name: "", dataStart: "", dataEnd: "" });

      await fetchTasksData(id);

      const updatedData = await fetchTasksData();

      const filteredData = updatedData.filter((item) => item.id === id);

      setData(filteredData);

      onChangeModalAdd();
    } catch (error) {
      console.error("Failed to add task:", error);
    }
  };

  const handleDeleteTask = async (categoryId) => {
    try {
      await deleteTask(categoryId);
      const updatedData = data.filter((item) => item._id !== categoryId);
      setData(updatedData);
    } catch (error) {
      console.error("Failed to delete category:", error);
    }
  };

  const handleUpdateTask = async (taskId, updatedData) => {
    try {
      await updateTask(taskId, updatedData);

      setData((prevData) => {
        return prevData.map((item) => {
          if (item._id === taskId) {
            return { ...item, updatedData };
          }
          return item;
        });
      });
    } catch (error) {
      console.error("Failed to update task:", error);
    }
  };
  return (
    <>
      <CategoryItemsBody>
        <Button
          button="button"
          onClick={() => {
            onChangeModalAdd();
            onChangeModalAdd();
          }}
        >
          Add tasks
        </Button>
        <p>{categoryName}</p>
        <CardContainer>
          {data &&
            Array.isArray(data) &&
            data.map(
              (item) =>
                item &&
                item._id && (
                  <TaskItem
                    key={item._id}
                    id={item._id}
                    categoryId={item.id}
                    name={item.name}
                    dataStart={item.dataStart.slice(0, 10)}
                    dataEnd={item.dataEnd.slice(0, 10)}
                    onDelete={() => handleDeleteTask(item._id)}
                    data={data}
                    handleUpdateTask={handleUpdateTask}
                  />
                )
            )}
        </CardContainer>
        {showModalAdd && (
          <ModalSample toggleModalAdd={toggleModalAdd}>
            <TaskForm
              onAddTask={handleAddTask}
              handleAddTask={handleAddTask}
              onChangeModalAdd={onChangeModalAdd}
              categoryId={id}
            />
          </ModalSample>
        )}
      </CategoryItemsBody>
    </>
  );
};
