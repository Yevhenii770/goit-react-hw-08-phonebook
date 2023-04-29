import { Username, Wrapper } from './UserMenu.stuled';

export const UserMenu = () => {
  //   const dispatch = useDispatch();
  //   const { user } = useAuth();

  return (
    <Wrapper>
      <Username>Welcome, </Username>
      <button type="button">Logout</button>
    </Wrapper>
  );
};
