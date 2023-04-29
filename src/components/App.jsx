import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './Layout';
import { RestrictedRoute } from './RestrictedRoute';

const HomePage = lazy(() => import('pages/Home'));

const RegisterPage = lazy(() => import('pages/Register'));

const LoginPage = lazy(() => import('pages/Login'));
const ContactsPage = lazy(() => import('pages/Contacts'));

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        {/* <Route index element={<HomePage />} /> */}
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<RegisterPage />} />
          }
        />
        {/* <Route path="/login" element={ } />
        <Route path="/tasks" element={ } /> */}
      </Routes>
    </>
  );
}
