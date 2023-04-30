import { Link } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <nav>
      <Link to="/register">Sign up</Link>
      <Link to="/login">Log In</Link>
    </nav>
  );
};
