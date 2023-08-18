import { authOperations, authSelectors } from 'redux/auth';
import { Username, Wrapper } from './UserMenu.stuled';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from './UserMenu.stuled';
import { ButtonComponent } from 'components/ButtonComponent/ButtonComponent';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <Wrapper>
      <Username>Welcome, {name}</Username>
      <ButtonComponent
        type="button"
        title="Logout"
        onClick={() => dispatch(authOperations.logOut())}
      />
    </Wrapper>
  );
};
