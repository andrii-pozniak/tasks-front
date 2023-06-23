import styled from "styled-components";

export const BodyBtnDelete = styled.div`
position: absolute;
display: flex;
top: 50%;
left: 50%;
flex-direction: column;
align-items: start;
justify-content: space-around;
padding: 30px;
border: 1px solid ${p => p.theme.colors.black};
background-color: ${p => p.theme.colors.background};
`;

export const BtnDelete = styled.div`
display: flex;
justify-content: space-around;
width: 100%;
margin-top: 20px;
`;

export const Button = styled.button`
padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;
border: 1px solid ${p => p.theme.colors.black};
background-color: ${p => p.theme.colors.background};
`;