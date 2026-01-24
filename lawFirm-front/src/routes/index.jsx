import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout";
import Home from "../pages/home";
import About from "../pages/about";
import Practice from "../pages/practiceAreas";
import Testimonials from "../pages/testimonials";
import Attorney from "../pages/attorney";
import Blog from "../pages/blog";
import ContactUs from "../pages/contactUs";

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
      {
        path:"/practice",
        element: <Practice/>,
      },
      {
        path:"/testimonials",
        element: <Testimonials/>,
      },
      {
        path:"/attorney",
        element: <Attorney/>,
      },
      {
        path:"/blog",
        element: <Blog/>,
      },
      {
        path:"/contactUs",
        element: <ContactUs/>,
      },
    ],
  },
]);
