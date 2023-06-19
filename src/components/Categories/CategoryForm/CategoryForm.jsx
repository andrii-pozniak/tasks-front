import React from "react";
import { Formik, Form } from "formik";
import { Container, Input, InputContainer, InputData } from "./CategoryForm.style";

const CategoryForm = ({ onAddCategory, onChangeModalAdd, setData }) => {
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

          <button type="button" onClick={onChangeModalAdd}>cancel</button>
          <button type="submit">save</button>
        </Form>
      </Formik>
    </Container>
  );
};

export default CategoryForm;