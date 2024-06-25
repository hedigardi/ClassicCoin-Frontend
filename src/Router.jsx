import { createBrowserRouter } from 'react-router-dom';
import Layout from './pages/Layout';
import Page404 from './pages/NotFoundPage';
import { Blockchain } from './pages/Blockchain';
import { Transact } from './pages/Transact';
import { Signin } from './pages/SignIn';
import { Signup } from './pages/SignUp';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Page404 />,
    children: [
      { path: '/', element: <Blockchain /> },
      { path: '/transact', element: <Transact /> },
      { path: '/signin', element: <Signin /> },
      { path: '/signup', element: <Signup /> },
    ],
  },
]);
