import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
import { Suspense } from 'react';
import { Div } from './Layout.styled';

export const Layout = () => {
  return (
    <Div>
      <AppBar />
      <Suspense>
        <Outlet />
      </Suspense>
    </Div>
  );
};
