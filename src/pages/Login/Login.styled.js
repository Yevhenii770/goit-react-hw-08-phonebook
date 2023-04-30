import styled from '@emotion/styled';

export const Form = styled.form`
    width: 320px;
    margin: 0 auto 15px;
    padding: 15px;
    border: 1px solid #d4d4d4;
    border-radius: 4px;
}`;

export const Title = styled.h1`
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    margin: 10px 0;
    font-size: 1.5rem;
    
}`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
}`;
export const Button = styled.button`
    margin: 0 auto;
    display: block;

    min-width: 150px;
    height: 40px;
    border: 0 solid transparent;
    border-radius: 4px;
    color: #fff;
    background-color: #2196f3;
    box-shadow: 0 4px 4px rgba(0,0,0,.15);
    opacity: 1;
    transition: background-color .25s cubic-bezier(.4,0,.2,1);

    cursor: pointer;
    
    &:hover {
     background-color: #68bcff;
    }
}`;
