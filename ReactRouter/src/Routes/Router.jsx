import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Movies from "../Pages/Movies";

export default function Routers() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact", // lowercase for consistency
      element: <Contact />,
    },
    {
      path: "/movies",
      element: <Movies />,
    },
  ]);

  return <RouterProvider router={router} />;
}
