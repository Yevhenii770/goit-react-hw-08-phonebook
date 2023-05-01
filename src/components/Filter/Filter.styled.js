import styled from '@emotion/styled';

export const Label = styled.label`
  width: calc(100% / 2);
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  margin: 0 auto 15px;

  @media screen and (min-width: 0px) and (max-width: 412px) {
    width: calc(100% / 1.5);
  }
`;
