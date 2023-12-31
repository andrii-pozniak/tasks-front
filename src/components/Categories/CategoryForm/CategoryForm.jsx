import React from "react";
import { Formik, Form } from "formik";
import {
  Container,
  Input,
  InputContainer,
  InputData,
} from "./CategoryForm.style";
import {
    BtnDelete,
    Button,
    
  } from "../CategoryDeletePopup/CategoryDeletePopup.style";
const CategoryForm = ({ onAddCategory, onChangeModalAdd }) => {
  const initialValues = {
    name: "",
    dataStart: "",
    dataEnd: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    onAddCategory(values);
    resetForm();
    onChangeModalAdd();
  };

  return (
    <Container>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <label htmlFor="name">Name:</label>
          <Input type="text" id="name" name="name" />
          <InputContainer>
            <label htmlFor="dataStart">Start Date:</label>
            <InputData type="date" id="dataStart" name="dataStart" />
          </InputContainer>

          <InputContainer>
            <label htmlFor="dataEnd">End Date:</label>
            <InputData type="date" id="dataEnd" name="dataEnd" />
          </InputContainer>
          <BtnDelete >
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

export default CategoryForm;
