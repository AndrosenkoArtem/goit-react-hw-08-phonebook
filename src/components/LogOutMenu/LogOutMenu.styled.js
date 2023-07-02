import styled from 'styled-components';
export const Li = styled.li`
  margin: 0px;
  &:first-child {
  }
`;
export const Ul = styled.ul`
  border: 1px solid black;
  border-radius: 4px;
  margin: 0px;
  list-style: none;
  margin-right: 10px;
  padding: 2px 10px;
  background-color: white;
`;
export const Button = styled.button`
  height: 42px;
  text-transform: uppercase;
  background: 0 0;
  border: none;
  border-radius: 5px;
  outline: 1px solid #000;
  padding: 4px 10px;
  font-size: 12px;
  font-weight: 500;
  transition: padding 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
`;
