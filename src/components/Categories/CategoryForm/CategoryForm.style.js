import styled from "styled-components";
import {  Field } from "formik";

export const Container = styled.div`
position: absolute;
top: 50%;
left: 50%;
display: flex;
flex-direction: column;
width: 25%;
padding: 50px;
border: 1px solid ${p => p.theme.colors.black};
background-color: ${p => p.theme.colors.background};
`;

export const Input = styled(Field)`
display: flex;
flex-direction: column;
width: 90%;
padding: 10px;
justify-content: center;
align-items: center;
border: 1px solid ${p => p.theme.colors.black};
background-color: ${p => p.theme.colors.background};
`;
export const InputData = styled(Field)`
display: flex;
flex-direction: column;
width: 50%;
padding: 10px;
justify-content: center;
align-items: center;
border: 1px solid ${p => p.theme.colors.black};
background-color: ${p => p.theme.colors.background};
`;

export const InputContainer = styled.div`
display: flex;
align-items: baseline;
justify-content: space-around;
margin-top: 10px;
`;