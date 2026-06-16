import { createBrowserRouter } from "react-router-dom"

import MainLayout from "../layout/MainLayout"

import Home from "../pages/Home"
import ProductDetails from "../pages/ProductDetails"
import Favorites from "../pages/Favorites"
import Profile from "../pages/Profile"
import Catalog from "../pages/Catalog"
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/product/:id",
        element: <ProductDetails />,
      },

      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/catalog",
        element: <Catalog />,
      },
    ],
  },
])

export default router