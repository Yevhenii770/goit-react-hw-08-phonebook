import styled from '@emotion/styled';

export const UlOfContact = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 15px;

  @media screen and (min-width: 0px) and (max-width: 412px) {
    justify-content: center;
  }
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;


  width: calc((100% - 30px) / 2);
  
  border-radius: 4px;
  padding: 2px;
  
  
  @media screen and (min-width: 0px) and (max-width: 412px) {
    width: 90%;
  }
  background-image: linear-gradient(to right, #8e2de2, #4a00e0);
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}
`;

export const Button = styled.button`
  display: block;
  min-width: 75px;
  height: 40px;
  border: 0 solid transparent;
  border-radius: 4px;
  color: #ffff;
  background-color: #ff000061;
  opacity: 1;
  transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover {
    background-color: #f71818;
  }
`;

export const MainText = styled.h1`
  text-align: center;
`;

export const SecondaryText = styled.h2`
  text-align: center;
  margin-bottom: 15px;
`;

export const Name = styled.p`
color:white;
&:first-letter {
  text-transform: uppercase;
}
}`;

export const Text = styled.p`
color:white;
}`;
