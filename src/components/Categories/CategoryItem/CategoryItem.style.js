import styled from "styled-components";

export const ItemBody = styled.div`

display: flex;
padding: 10px;
justify-content: space-between;
border: 1px solid ${p => p.theme.colors.black};
background-color: ${p => p.theme.colors.background};
margin-top: 10px;

`;

export const ItemBtn = styled.button`
border: ${p => p.theme.borders.none};
background-color:  transparent;
font-family: 'Roboto';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.middle};
  font-size: ${p => p.theme.fontSizes.mx};
  line-height: ${p => p.theme.lineHeights.body};

`;
export const BtnBody = styled.div`
display: flex;
justify-content: space-around;
align-items: baseline;


`;
export const ItemPage = styled.p`
font-style: normal;
  font-weight: ${p => p.theme.fontWeights.middle};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.body};

`;
export const BodyBtn = styled.div`
position: absolute;
display: flex;
flex-direction: column;
align-items: start;
justify-content: space-around;
position: absolute;
top: 83%;
left: 63%;
padding: 20px;
padding-right: 50px;
border: 1px solid ${p => p.theme.colors.black};
background-color: ${p => p.theme.colors.background};
`;