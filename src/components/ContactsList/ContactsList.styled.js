import styled from '@emotion/styled';

export const UlOfContact = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 15px;
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  width: calc((100% - 30px) / 2);
  border: 1px solid #d4d4d4;
  border-radius: 4px;
  padding: 2px;
}
`;

export const Button = styled.button`
  display: block;
  min-width: 75px;
  height: 40px;
  border: 0 solid transparent;
  border-radius: 4px;
  color: #fff;
  background-color: #fb0f0f;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
  opacity: 1;
  transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover {
    background-color: #f71818a1;
  }
`;

export const MainText = styled.h1`
  text-align: center;
`;

export const SecondaryText = styled.h2`
  text-align: center;
  margin-bottom: 15px;
`;
