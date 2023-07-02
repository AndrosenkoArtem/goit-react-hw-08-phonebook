import { NavigationLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <>
      <NavigationLink to="/register">Register</NavigationLink>
      <NavigationLink to="/login">Log In</NavigationLink>
    </>
  );
};
