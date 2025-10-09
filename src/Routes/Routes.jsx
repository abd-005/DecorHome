import { createBrowserRouter } from "react-router";
import App from "../App";
import Products from "../Pages/Products";
import Home from "../Pages/Home";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Wishlist from "../Pages/Wishlist";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement : <ErrorPage />,
    children : [
        {
        //   path: "/", // one way
        index: true, //alt way
          element: <Home />,
        },
        {
          path: '/products',
          element: <Products></Products>
        },
        {
          path: '/wishlist',
          element: <Wishlist></Wishlist>
        }   
    ]
  },
//   {
//     //old way | work for undefined path
//     path:'*',
//     element: <ErrorPage/>
//   }
]);
