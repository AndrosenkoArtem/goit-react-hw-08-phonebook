import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from '../Navigation/Navigation';
import { Header, Nav } from './AppBar.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { LogOutMenu } from 'components/LogOutMenu/LogOutMenu';

export const AppBar = () => {
  const isLoggenIn = useSelector(selectIsLoggedIn);
  return (
    <Header>
      {isLoggenIn ? (
        <>
          <Nav>
            <Navigation />
          </Nav>
          <LogOutMenu />
        </>
      ) : (
        <Nav>
          <AuthNav />
        </Nav>
      )}
    </Header>
  );
};
