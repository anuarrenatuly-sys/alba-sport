import { createBrowserRouter } from "react-router-dom"

import MainLayout from "../layout/MainLayout"

import Home from "../pages/Home"
import ProductDetails from "../pages/ProductDetails"
import Favorites from "../pages/Favorites"
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
    ],
  },
])

export default router