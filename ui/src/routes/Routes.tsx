import { createBrowserRouter, type RouteObject } from "react-router-dom";
import { About } from "../components/About/About";
import { BlogHome } from "../components/Blog/BlogHome";
import { BlogPage } from "../components/Blog/BlogPage";
import { Home } from "../components/Home/Home";
import { ErrorComponent } from "../components/Layout/Error";
import { Layout } from "../components/Layout/Layout";
import { Nusc } from "../components/Nusc/Nusc";
import { WeddingHome } from "../components/Wedding/WeddingHome";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorComponent />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/blog", element: <BlogHome /> },
      { path: "/blog/:slug", element: <BlogPage /> },
      { path: "/widgets/nusc", element: <Nusc /> },
      { path: "/widgets/wedding", element: <WeddingHome /> },
      { path: "/widgets/wedding/:subpath", element: <WeddingHome /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
