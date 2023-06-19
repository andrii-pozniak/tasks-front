import React, { useState } from "react";
import {
  ItemBody,
  ItemBtn,
  BtnBody,
  ItemPage,
  BodyBtn,
} from "./CategoryItem.style";
import { ModalSample } from "../../Modal/Modal";
import { CategoryEditPopup } from "../CategoryEditPopup/CategoryEditPopup";
import { CategoryDeletePopup } from "../CategoryDeletePopup/CategoryDeletePopup";

export const CategoryItem = ({ id, name, dataEnd, onDelete, data }) => {
  const [showModal, setShowModal] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
    setShowModalDelete(false);
    setShowModalEdit(false)
    document.body.style.overflow = "";
  };

  const toggleModalDelete = () => {
    setShowModalDelete(!showModalDelete);
    setShowModal(false);
    document.body.style.overflow = "";
  };

  const toggleModalEdit = () => {
    setShowModalEdit(!showModalEdit);
    setShowModal(false);
    document.body.style.overflow = "";
  };
  const onChangeModal = () => {
    toggleModal();
  };

  const onChangeModalDelete = () => {
    toggleModalDelete();
  };

  const onChangeModalEdit = () => {
    toggleModalEdit();
  };

  return (
    <>
      <ItemBody id={id}>
        <ItemPage>{name} </ItemPage>
        <ItemPage>tasks</ItemPage>
        <ItemPage>{dataEnd}</ItemPage>
        <BtnBody>
          <ItemBtn type="button">actions</ItemBtn>
          <ItemBtn type="button" onClick={onChangeModal}>
            more
          </ItemBtn>
        </BtnBody>
      </ItemBody>
      {showModal && (
        <ModalSample toggleModal={toggleModal}>
          <BodyBtn>
          <ItemBtn button="button" onClick={onChangeModalEdit}>Edit</ItemBtn>
            <ItemBtn button="button" onClick={onChangeModalDelete}>
              Delete
            </ItemBtn>
          </BodyBtn>
        </ModalSample>
      )}
      {showModalDelete && (
        <ModalSample toggleModal={toggleModalDelete}>
          <CategoryDeletePopup onChangeModalDelete={onChangeModalDelete} onDelete={onDelete} id={id}/>
        </ModalSample>
      )}
      {showModalEdit && (
        <ModalSample toggleModal={toggleModalEdit}>
          <CategoryEditPopup onChangeModalEdit={onChangeModalEdit} id={id} data={data}/>
        </ModalSample>
      )}
    </>
  );
};
