import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding: ${p => p.theme.space[4]}px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[5]}px;
  padding-right: ${p => p.theme.space[5]}px;
  background: #e3f1ff;

  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.14),
    0px 2px 2px rgba(0, 0, 0, 0.2);
`;
export const Link = styled(NavLink)`
  padding: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.large};
  text-decoration: none;
  color: ${p => p.theme.colors.black};
  font-weight: ${p => p.theme.fontWeights.middle};
  :not(:last-child) {
    margin-right: ${p => p.theme.space[4]}px;
    :hover:not(.active),
    :focus:not(.active) {
      transform: scale(1.05);
      color: ${p => p.theme.colors.white};
      background-color: ${p => p.theme.colors.primary};
      box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
      0px 1px 1px rgba(0, 0, 0, 0.2);
    }
  }
  &.active {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.primary};
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
      0px 1px 1px rgba(0, 0, 0, 0.2);
  }
`;