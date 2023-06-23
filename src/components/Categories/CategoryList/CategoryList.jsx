import React, { useEffect, useState } from "react";

import { CategoryItemsBody, Button } from "./CategoryList.style";
import {
  fetchCategoriesData,
  deleteCategory,
  addCategory,
} from "../../utils/getCategories";
import CategoryForm from "components/Categories/CategoryForm/CategoryForm";
import { CategoryItem } from "components/Categories/CategoryItem/CategoryItem";
import { ModalSample } from "../../Modal/Modal";
import { TasksList } from "components/Tasks/TaskList/TaskList";

export const CategoryList = () => {
  const [data, setData] = useState(null);
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [, setStatus] = useState("pending");
  const [newCategory, setNewCategory] = useState({
    name: "",
    dataStart: "",
    dataEnd: "",
  });

  useEffect(() => {
    (async () => {
      try {
        setStatus("pending");
        const data = await fetchCategoriesData();
        setStatus("fulfilled");
        setData(data);
      } catch {
        setStatus("rejected");
      }
    })();
  }, [newCategory]);

  useEffect(() => {
    if (newCategory) {
      setData((prevData) => {
        if (prevData) {
          return [...prevData, newCategory];
        } else {
          return [newCategory];
        }
      });
    }
  }, [newCategory]);

  const toggleModalAdd = () => {
    setShowModalAdd(!showModalAdd);
    document.body.style.overflow = "";
  };

  const onChangeModalAdd = () => {
    toggleModalAdd();
  };

  const handleDeleteCategory = async (categoryId) => {
    try {
      await deleteCategory(categoryId);
      const updatedData = data.filter((item) => item._id !== categoryId);
      setData(updatedData);
    } catch (error) {
      console.error("Failed to delete category:", error);
    }
  };

  const handleAddCategory = async (newCategory) => {
    try {
      const addedCategory = await addCategory(newCategory);
      setData((prevData) => {
        if (prevData && Array.isArray(prevData)) {
          return [...prevData, addedCategory];
        } else {
          return [addedCategory];
        }
      });
      setNewCategory({ name: "", dataStart: "", dataEnd: "" });
    } catch (error) {
      console.error("Failed to add category:", error);
    }
  };

  return (
    <>
      <CategoryItemsBody>
        <Button
          button="button"
          onClick={() => {
            onChangeModalAdd();
          }}
        >
          Add category
        </Button>

        {data &&
          Array.isArray(data) &&
          data.map(
            (item) =>
              item &&
              item._id && (
                <CategoryItem
                  key={item._id}
                  id={item._id}
                  name={item.name}
                  dataStart={item.dataStart}
                  dataEnd={item.dataEnd}
                  onDelete={() => handleDeleteCategory(item._id)}
                  data={data}
                  newCategory={newCategory}
                  setNewCategory={setNewCategory}
                >
                  <TasksList
                    categoryId={() => handleDeleteCategory(item._id)}
                    categoryName={item.name}
                  />
                </CategoryItem>
              )
          )}

        {showModalAdd && (
          <ModalSample toggleModalAdd={toggleModalAdd}>
            <CategoryForm
              onAddCategory={handleAddCategory}
              handleAddCategory={handleAddCategory}
              onChangeModalAdd={onChangeModalAdd}
              setData={setData}
            />
          </ModalSample>
        )}
      </CategoryItemsBody>
    </>
  );
};
