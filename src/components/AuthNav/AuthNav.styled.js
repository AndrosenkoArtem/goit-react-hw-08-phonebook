import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: 500;
  &.active {
    color: cornflowerblue;
  }
`;
