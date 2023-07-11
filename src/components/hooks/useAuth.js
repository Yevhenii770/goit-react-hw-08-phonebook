import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isLoading = useSelector(authSelectors.selectIsLoading);
  const user = useSelector(authSelectors.getUsername);

  return {
    isLoggedIn,
    isLoading,
    user,
  };
};
