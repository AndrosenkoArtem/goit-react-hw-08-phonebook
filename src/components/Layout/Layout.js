import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from '../AppBar/AppBar';
import { Suspense } from 'react';
import { GlobalStyle } from 'components/GlobalStyle';

export const Layout = () => {
  return (
    <>
      <GlobalStyle />
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
