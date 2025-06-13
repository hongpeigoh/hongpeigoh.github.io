import { createBrowserRouter, RouteObject } from "react-router-dom";

import { Error } from "../components/Layout/Error";
import { Layout } from "../components/Layout/Layout";
import { Home } from "../components/Home/Home";
import { About } from "../components/About/About";
import { Nusc } from "../components/Nusc/Nusc"; 
import { Mrt } from "../components/Mrt/Mrt";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/widgets/nusc", element: <Nusc /> },
      { path: "/widgets/mrt", element: <Mrt /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
