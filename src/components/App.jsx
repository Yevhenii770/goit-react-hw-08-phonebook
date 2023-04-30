import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from './Layout';

import Home from 'pages/Home';
import ContactsView from 'pages/Contacts';
import Login from 'pages/Login';
import Register from 'pages/Register';

export default function App() {
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<ContactsView />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}
