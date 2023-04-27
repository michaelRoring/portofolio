import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import Portofolio from "../pages/Portofolio";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/portfolio",
        element: <Portofolio />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default router;
