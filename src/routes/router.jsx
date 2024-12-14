import { createBrowserRouter } from "react-router-dom";
import Layouts from "../layouts/Layouts";
import HomePage from "../pages/home/HomePage";
import Basket from "../pages/basket/Basket";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "basket",
        element: <Basket />
      }
    ]
  }
])