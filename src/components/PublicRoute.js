import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

export const PublicRoute = ({ component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
};
