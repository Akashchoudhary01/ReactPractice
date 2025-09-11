import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Movies from "../Pages/Movies";
import AppLayout from "../Layout/AppLayout";
import ErrorPage from "../Pages/ErrorPage";
import {getMoviesData} from '../Components/ApiData'
import {FormHandel} from '../Pages/Contact'
export default function Routers() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
          action: FormHandel
        },
        {
          path: "/movies",
          element: <Movies />,
          loader: getMoviesData,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
