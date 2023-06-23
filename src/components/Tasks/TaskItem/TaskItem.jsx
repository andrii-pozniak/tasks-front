import React, { useState } from "react";
import { ItemBody, ItemPage } from "./TaskItem.style";

import {
  BtnDelete,
  Button,
} from "components/Categories/CategoryDeletePopup/CategoryDeletePopup.style";
import { ModalSample } from "../../Modal/Modal";
import { TaskDeletePopup } from "../TaskDeletePopup/TaskDeletePopup.jsx";
import { TaskEditPopup } from "../TaskEditPopup/TaskEditPopup.jsx";

export const TaskItem = ({
  id,
  name,
  dataEnd,
  onDelete,
  data,
  dataStart,
  handleUpdateTask,
}) => {
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);

  const toggleModalDelete = () => {
    setShowModalDelete(!showModalDelete);
    setShowModal(false);
    document.body.style.overflow = "";
  };

  const toggleModal = () => {
    setShowModal(!showModal);
    setShowModalDelete(false);
    setShowModalEdit(false);
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
        <ItemPage>{dataStart}</ItemPage>
        <ItemPage>{dataEnd}</ItemPage>
        <BtnDelete>
          <Button type="button" onClick={onChangeModal}>
            delete
          </Button>
          <Button type="button" onClick={onChangeModalEdit}>
            edit
          </Button>
        </BtnDelete>
      </ItemBody>
      {showModal && (
        <ModalSample toggleModal={toggleModalDelete}>
          <TaskDeletePopup
            onChangeModalDelete={onChangeModalDelete}
            onDelete={onDelete}
            id={id}
          />
        </ModalSample>
      )}
      {showModalDelete && (
        <ModalSample toggleModal={toggleModalDelete}>
          <TaskDeletePopup
            onChangeModalDelete={onChangeModalDelete}
            onDelete={onDelete}
            id={id}
          />
        </ModalSample>
      )}
      {showModalEdit && (
        <ModalSample toggleModal={toggleModalEdit}>
          <TaskEditPopup
            onChangeModalEdit={onChangeModalEdit}
            id={id}
            data={data}
            handleUpdateTask={handleUpdateTask}
          />
        </ModalSample>
      )}
    </>
  );
};
