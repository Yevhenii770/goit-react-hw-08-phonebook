import { authOperations, authSelectors } from 'redux/auth';
import { Username, Wrapper } from './UserMenu.stuled';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from './UserMenu.stuled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <Wrapper>
      <Username>Welcome, {name}</Username>
      <Button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Logout
      </Button>
    </Wrapper>
  );
};
