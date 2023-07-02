import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import { Ul, Li, Button } from './LogOutMenu.styled';

export const LogOutMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <>
      <Ul>
        <Li>{user.name}</Li>
        <Li>{user.email}</Li>
      </Ul>
      <Button onClick={() => dispatch(logout())} type="button">
        Log Out
      </Button>
    </>
  );
};
