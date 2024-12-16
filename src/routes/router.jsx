import { createBrowserRouter } from "react-router-dom";
import Layouts from "../layouts/Layouts";
import HomePage from "../pages/home/HomePage";
import Basket from "../pages/basket/Basket";
import Account from "../pages/account/Account";
import Favorite from "../pages/favorite/Favorite";
import ContactPage from "../pages/contact/ContactPage";
import AboutPage from "../pages/about/AboutPage";
import SingUp from "../pages/singup/SingUp";
import Login from "../pages/login/Login";

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
      },
      {
        path: "account",
        element: <Account />
      },
      {
        path: "favorite",
        element: <Favorite />
      },
      {
        path: "contact",
        element: <ContactPage />
      },
      {
        path: "about",
        element: <AboutPage />
      },
      {
        path: "singup",
        element: <SingUp />
      },
      {
        path: "login",
        element: <Login />
      }
    ]
  }
])