import React, { useState } from "react";
import { ItemPage } from "../CategoryItem/CategoryItem.style";
import { updateCategory } from "../../utils/getCategories";
import {
  BtnDelete,
  Button,
  BodyBtnDelete,
} from "../CategoryDeletePopup/CategoryDeletePopup.style";

export const CategoryEditPopup = ({ id, onChangeModalEdit, data }) => {
  const [newName, setNewName] = useState("");
  const [ , setData] = useState(data);

  const handleInputChange = (event) => {
    setNewName(event.target.value);
  };

  const handleSave = async () => {
    try {
      await updateCategory(id, newName);
      const updatedData = data.map((item) => {
        if (item.id === id) {
          return { ...item, name: newName };
        }
        return item;
      });
      setData(updatedData);
      onChangeModalEdit();
    } catch (error) {
      console.error("Failed to update category:", error);
    }
  };
  console.log("id", id);
  return (
    <>
      <BodyBtnDelete>
        <ItemPage>Edit Developers category</ItemPage>
        <label>name</label>
        <input value={newName} onChange={handleInputChange}/>
        <BtnDelete>
          <Button button="button" onClick={onChangeModalEdit}>
            cancel
          </Button>
          <Button button="button" onClick={handleSave}>
            save
          </Button>
        </BtnDelete>
      </BodyBtnDelete>
    </>
  );
};
