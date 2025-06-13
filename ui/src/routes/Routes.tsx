import { createBrowserRouter, RouteObject } from "react-router-dom";

import { Error } from "../components/Layout/Error";
import { Layout } from "../components/Layout/Layout";
import { Home } from "../components/Home/Home";
import { About } from "../components/About/About";
import { Nusc } from "../components/Nusc/Nusc";
import { BlogHome } from "../components/Blog/BlogHome";
import { BlogPage } from "../components/Blog/BlogPage";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/blog", element: <BlogHome /> },
      { path:"/blog/:slug", element: <BlogPage /> },
      { path: "/widgets/nusc", element: <Nusc /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
