import styled from 'styled-components';

export const CategoryItemsBody = styled.div`
position: relative;
justify-content: center;
width: 70%;
padding: 50px;
border: 1px solid ${p => p.theme.colors.black};
background-color: ${p => p.theme.colors.background};

`;

export const Button = styled.button`
display: flex;
padding:  ${p => p.theme.space[3]}px;
margin-left: auto;
border: 1px solid ${p => p.theme.colors.black};
background-color: ${p => p.theme.colors.background};
`;

