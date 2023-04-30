import { authOperations, authSelectors } from 'redux/auth';
import { Username, Wrapper } from './UserMenu.stuled';
import { useSelector, useDispatch } from 'react-redux';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <Wrapper>
      <Username>Welcome, {name}</Username>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Logout
      </button>
    </Wrapper>
  );
};
