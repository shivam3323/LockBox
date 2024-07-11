import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Front from './components/Front';
import Pricing from './components/Pricing';
import Signup from './components/Signup';
import Login from './components/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Front />,
  },
  {
    path: '/passwords',
    element: <Navbar />,
  },
  {
    path: '/pricing',
    element: <Pricing />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/login',
    element: <Login />,
  },
 
]);

const App = () => {

 
  return (

    <div className="flex flex-col min-h-screen">
      <RouterProvider router={router} />
    </div>

  );
};

export default App;
