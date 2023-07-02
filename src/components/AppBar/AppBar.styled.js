import styled from 'styled-components';
export const Header = styled.header`
  display: flex;
  justify-content: baseline;
  margin: 10px 40px 10px;
  align-items: center;
`;
export const Nav = styled.nav`
  display: flex;
  flex: auto;
  a {
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
`;
