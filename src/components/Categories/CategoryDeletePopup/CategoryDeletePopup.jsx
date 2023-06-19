import React from "react";
import { ItemPage } from "../CategoryItem/CategoryItem.style";
import { BtnDelete, Button, BodyBtnDelete } from "./CategoryDeletePopup.style";

export const CategoryDeletePopup = ({ id, onChangeModalDelete, onDelete }) => {
    const handleDelete = () => {
        onDelete(id);
      };
      console.log("id", id )
  return (
    <>
      <BodyBtnDelete>
        <ItemPage>Do you want to delete this category?</ItemPage>
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
