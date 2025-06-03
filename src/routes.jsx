import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import Layout from "./routes/Layout";
import Shop from "./routes/Shop";
import Cart from "./routes/Cart";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/shop/:filter",
        element: <Shop />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
  // {
  //   path: "/shop",
  //   element: <Shop />,
  // },
  // {
  //   path: "/shop/:filter",
  //   element: <Shop />,
  // },
  // {
  //   path: "/Cart",
  //   element: <Cart />,
  // },
]);

export default routes;
