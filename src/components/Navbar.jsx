import {
    ShoppingCart,
    Heart,
    Search,
    Menu,
    Moon, 
    Sun,
  } from "lucide-react"
  
  import { useCart } from "../context/CartContext"
  import { useTheme } from "../context/ThemeContext"
  import { useState } from "react"
  
  import CartDrawer from "./CartDrawer"
  import MobileMenu from "./MobileMenu"
  import { Link } from "react-router-dom"
  
  function Navbar() {
    const { cart } = useCart()

    const { darkMode, toggleTheme } =
  useTheme()
  
    const [open, setOpen] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
  
    const totalItems = cart.reduce(
      (acc, item) => acc + item.quantity,
      0
    )
  
    return (
      <>
        <header className="w-full border-b border-gray-200 bg-white dark:bg-black dark:border-gray-800 text-black dark:text-white sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
  
            <div>
              <h1 className="text-2xl font-black tracking-wide">
                QADAM SPORT
              </h1>
            </div>
  
            <nav className="hidden md:flex items-center gap-8 font-medium">
              <a href="#">Басты бет</a>
              <a href="#">Каталог</a>
              <a href="#">Ерлер</a>
              <a href="#">Әйелдер</a>
            </nav>
  
            <div className="flex items-center gap-4">
  
              <Search className="w-5 h-5 cursor-pointer" />

              {/* 
<button onClick={toggleTheme}>
  {darkMode ? (
    <Sun className="w-5 h-5" />
  ) : (
    <Moon className="w-5 h-5" />
  )}
</button>
*/}
  
              <Link to="/favorites">
  <Heart className="w-5 h-5 cursor-pointer" />
</Link>
  
              <button
                onClick={() => setOpen(true)}
                className="relative"
              >
                <ShoppingCart className="w-5 h-5 cursor-pointer" />
  
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
        <MobileMenu
  open={menuOpen}
  setOpen={setMenuOpen}
/>
      </>
    )
  }
  
  export default Navbar