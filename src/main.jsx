import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import { FavoritesProvider } from "./context/FavoritesContext"
import "./index.css"
import router from "./router"
import { Toaster } from "react-hot-toast"
import { ThemeProvider } from "./context/ThemeContext"
import { CartProvider } from "./context/CartContext"
import { AuthProvider } from "./context/AuthContext"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
  <FavoritesProvider>
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster position="top-right" />
      </AuthProvider>
    </ThemeProvider>
  </FavoritesProvider>
</CartProvider>
  </React.StrictMode>
)