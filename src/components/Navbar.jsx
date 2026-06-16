import {
  ShoppingCart,
  Heart,
  Search,
  Menu,
  User,
} from "lucide-react"
  
  import { useCart } from "../context/CartContext"
  import { useState } from "react"
  
  import CartDrawer from "./CartDrawer"
  import MobileMenu from "./MobileMenu"
  import { Link } from "react-router-dom"
  import { useAuth } from "../context/AuthContext"
  import AuthModal from "./AuthModal"
  
  function Navbar() {
    const { cart } = useCart()

    const { user } = useAuth()
  
    const [open, setOpen] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    const [authOpen, setAuthOpen] =
  useState(false)
  
    const totalItems = cart.reduce(
      (acc, item) => acc + item.quantity,
      0
    )
  
    return (
      <>
        <header className="w-full bg-white/90 backdrop-blur-lg border-b border-gray-100 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
  
            <div>
            <Link to="/">
  <h1 className="text-3xl font-black tracking-wider hover:text-orange-500 transition">
    ALBA SPORT
  </h1>
</Link>
            </div>
  
            <nav className="hidden md:flex items-center gap-8 font-semibold">

            <a
  href="/"
  className="hover:text-orange-500 transition"
>
  Басты бет
</a>

  <Link
    to="/catalog"
    className="hover:text-orange-500 transition"
  >
    Каталог
  </Link>

  <a
  href="/#brands"
  className="hover:text-orange-500 transition"
>
  Танымал брендтер
</a>

<a
  href="/#contact"
  className="hover:text-orange-500 transition"
>
  Байланыс
</a>

</nav>
  
<div className="flex items-center gap-5">
  
            <Link
  to={user ? "/profile" : "#"}
  onClick={() => {
    if (!user) {
      setAuthOpen(true)
    }
  }}
>
<User className="w-5 h-5 cursor-pointer hover:text-orange-500 transition" />
</Link>
  
              <Link to="/favorites">
              <Heart className="w-5 h-5 cursor-pointer hover:text-orange-500 transition" />
</Link>
  
              <button
                onClick={() => setOpen(true)}
                className="relative"
              >
                <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-orange-500 transition" />
  
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
  
              <button onClick={() => setMenuOpen(true)}>
  <Menu className="w-6 h-6 md:hidden cursor-pointer" />
</button>
  
            </div>
          </div>
        </header>
  
        <CartDrawer
          open={open}
          setOpen={setOpen}
        />

<AuthModal
  open={authOpen}
  setOpen={setAuthOpen}
/>

        <MobileMenu
  open={menuOpen}
  setOpen={setMenuOpen}
/>
      </>
    )
  }
  
  export default Navbar