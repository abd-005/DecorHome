import { createBrowserRouter } from "react-router";
import App from "../App";
import Products from "../Pages/Products";
import Home from "../Pages/Home";
import MainLayout from "../Layouts/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children : [
        {
        //   path: "/", // one way
        index: true, //alt way
          element: <Home />,
        },
        {
          path: '/products',
          element: <Products></Products>
        }   
    ]
  },
]);
