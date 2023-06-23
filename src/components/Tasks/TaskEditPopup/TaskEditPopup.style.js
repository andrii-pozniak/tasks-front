import React, { useState } from "react";
import { ItemPage } from "../CategoryItem/CategoryItem.style";
import { updateTask } from "../../utils/updateTask";
import {
  BtnDelete,
  Button,
  BodyBtnDelete,
} from "../CategoryDeletePopup/CategoryDeletePopup.style";

export const TaskEditPopup = ({ id, onChangeModalEdit, data }) => {
  const [newName, setNewName] = useState("");
  const [, setData] = useState(data);

  const handleInputChange = (event) => {
    setNewName(event.target.value);
  };

  const handleSave = async () => {
    try {
      await updateTask(id, newName);
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
  return (
    <>
      <BodyBtnDelete>
        <ItemPage>Edit Developers category</ItemPage>
        <label>name</label>
        <input value={newName} onChange={handleInputChange} />
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
