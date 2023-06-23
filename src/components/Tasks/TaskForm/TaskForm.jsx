import React from "react";
import { Formik, Form } from "formik";

import {
  Input,
  InputContainer,
  InputData,
} from "components/Categories/CategoryForm/CategoryForm.style";
import { Container } from "./TaskForm.style";
import {
  BtnDelete,
  Button,
} from "components/Categories/CategoryDeletePopup/CategoryDeletePopup.style";

export const TaskForm = ({ onAddTask, onChangeModalAdd }) => {
  const initialValues = {
    name: "",
    description: "",
    dataStart: "",
    dataEnd: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    onAddTask(values);
    resetForm();
    onChangeModalAdd();
  };
  return (
    <Container>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <label htmlFor="name">name</label>
          <Input type="text" id="name" name="name" />
          <label htmlFor="description">Description</label>
          <Input type="text" id="description" name="description" />
          <InputContainer>
            <label htmlFor="dataStart">Start Date:</label>
            <InputData type="date" id="dataStart" name="dataStart" />
          </InputContainer>

          <InputContainer>
            <label htmlFor="dataEnd">End Date:</label>
            <InputData type="date" id="dataEnd" name="dataEnd" />
          </InputContainer>
          <BtnDelete>
            <Button type="button" onClick={onChangeModalAdd}>
              cancel
            </Button>
            <Button type="submit">save</Button>
          </BtnDelete>
        </Form>
      </Formik>
    </Container>
  );
};
