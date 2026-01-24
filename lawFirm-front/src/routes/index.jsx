import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout";
import Home from "../pages/home";
import About from "../pages/about";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path:"/about",
        element: <About/>,
      },
    ],
  },
]);
