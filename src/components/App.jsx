// import { ContactForm } from './ContactForm/ContactForm';
// import { GlobalStyle } from './GlobalStyle';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';
import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { RegisterForm } from './RegisterForm/RegisterForm';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

const Contacts = lazy(() => import('../pages/Contacts'));
const Login = lazy(() => import('../pages/Login'));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
        <Route
          path="/login"
          element={<PublicRoute redirectTo="/contacts" component={<Login />} />}
        />
        <Route
          path="/register"
          element={
            <PublicRoute redirectTo="/contacts" component={<RegisterForm />} />
          }
        />
      </Route>
    </Routes>
  );
  // return (
  //
  // );
};
