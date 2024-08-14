import React from 'react';
import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';


import { useDispatch } from 'react-redux';


const Body = () => {
  const dispatch = useDispatch();

  


  return (
    <div>
      <RouterProvider router={approuter} />
    </div>
  );
}


const AppLayout = () => {
  return (
    <div>
      <Outlet /> 
    </div>
  );
};

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/browse",
    element: <Browse />
  }
    ]
}
]);

export default Body