import styled from '@emotion/styled';

export const Form = styled.form`
    width: 320px;
    margin: 0 auto 15px;
    padding: 15px;
    border: 1px solid #d4d4d4;
    border-radius: 4px;

    @media screen and (min-width: 0px) and (max-width: 412px) {
    width: calc(100% / 1.1);
    margin-bottom: 40px;
  }
}`;

export const Title = styled.h1`
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    margin: 10px 0;
    font-size: 1.5rem;
    color: #2196f3;
}`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
}`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
`;
