import React, { useState } from "react";
import { ItemPage } from "components/Categories/CategoryItem/CategoryItem.style";
import { updateTask } from "../../utils/getTasks";
import {
  BtnDelete,
  Button,
  BodyBtnDelete,
} from "components/Categories/CategoryDeletePopup/CategoryDeletePopup.style";

export const TaskEditPopup = ({
  id,
  onChangeModalEdit,
  handleUpdateTask,
}) => {
  const [newName, setNewName] = useState("");

  const handleInputChange = (event) => {
    setNewName(event.target.value);
  };

  const handleSave = async () => {
    try {
      await updateTask(id, newName);
      handleUpdateTask(id, newName);

      setNewName("");
      onChangeModalEdit();
    } catch (error) {
      console.error("Failed to update category:", error);
    }
  };
  return (
    <>
      <BodyBtnDelete>
        <ItemPage>Edit Developers Task</ItemPage>
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
