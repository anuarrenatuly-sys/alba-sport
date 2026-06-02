import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import { FavoritesProvider } from "./context/FavoritesContext"
import "./index.css"
import router from "./router"
import { Toaster } from "react-hot-toast"
import { ThemeProvider } from "./context/ThemeContext"
import { CartProvider } from "./context/CartContext"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
  <FavoritesProvider>
    <ThemeProvider>
      <RouterProvider router={router} />
      <Toaster position="top-right" />
    </ThemeProvider>
  </FavoritesProvider>
</CartProvider>
  </React.StrictMode>
)