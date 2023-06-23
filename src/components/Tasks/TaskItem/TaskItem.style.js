import styled from "styled-components";

export const ItemBody = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
padding: 10px;
justify-content: center;
border: 1px solid ${p => p.theme.colors.black};
background-color: ${p => p.theme.colors.background};
margin-top: 10px;

`;

export const ItemPage = styled.p`
font-style: normal;
  font-weight: ${p => p.theme.fontWeights.middle};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.body};

`;