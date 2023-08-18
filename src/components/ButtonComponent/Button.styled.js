import styled from '@emotion/styled';

export const Button = styled.button`
  display: block;
  min-width: 75px;
  height: 40px;
  border: 0 solid transparent;
  border-radius: 4px;
  color: #fff;
  background-color: #2196f3;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
  opacity: 1;
  transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover {
    background-color: #9364fb;
  }
`;
