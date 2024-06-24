import { createBrowserRouter } from 'react-router-dom';
import Layout from './pages/Layout';
import ErrorPage from './pages/ErrorPage';
import { Blockchain } from './pages/Blockchain';
import { Transact } from './pages/Transact';
import { Login } from './pages/Login';
import { Register } from './pages/Register';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Blockchain /> },
      { path: '/transact', element: <Transact /> },
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> },
    ],
  },
]);
