import React from 'react';
import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';




const Body = () => {


  


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