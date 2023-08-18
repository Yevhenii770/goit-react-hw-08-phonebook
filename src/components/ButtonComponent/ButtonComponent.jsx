import { Button } from './Button.styled';

export const ButtonComponent = ({ type, title, onClick }) => {
  return (
    <Button type={type} onClick={onClick}>
      {title}
    </Button>
  );
};
