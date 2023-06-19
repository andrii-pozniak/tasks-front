import  styled  from "styled-components";

export const ItemMore = styled.div`
position: absolute;
display: flex;
flex-direction: column;
align-items: start;
justify-content: space-around;
position: absolute;
top: 83%;
left: 63%;
/* left: 20px;
width: 200px;
height: 200px; */
padding: 20px;
padding-right: 50px;
border: 1px solid ${p => p.theme.colors.black};
background-color: ${p => p.theme.colors.background};
`;