import React from "react";
import { ItemPage } from "components/Categories/CategoryItem/CategoryItem.style";
import { BtnDelete, Button, BodyBtnDelete } from "components/Categories/CategoryDeletePopup/CategoryDeletePopup.style";

export const TaskDeletePopup = ({ id, onChangeModalDelete, onDelete }) => {
    const handleDelete = () => {
        onDelete(id);
      };
      console.log("id", id )
  return (
    <>
      <BodyBtnDelete>
        <ItemPage> Do you want delete this task ?</ItemPage>
        <BtnDelete>
          <Button button="button" onClick={onChangeModalDelete}>
            no
          </Button>
          <Button button="button" onClick={handleDelete}>
            yes
          </Button>
        </BtnDelete>
      </BodyBtnDelete>
    </>
  );
};
