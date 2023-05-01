import styled from '@emotion/styled';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  border-bottom: 1px solid gray;
  padding-top: 10px;
  padding-bottom: 10px;

  @media screen and (min-width: 0px) and (max-width: 412px) {
    flex-direction: column;
  }
`;
