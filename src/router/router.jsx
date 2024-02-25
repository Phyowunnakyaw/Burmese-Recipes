import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  import Layout from "../pages/layout/layout"
  import Home from "../pages/Home";
  import Recipes from "../pages/Recipes"
import Detail from "../pages/Detail";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/recipes",
          element: <Recipes />
        },
        {
          path: "/recipes/:id",
          element: <Detail />
        }
      ]
    },
  ]);

export default router;