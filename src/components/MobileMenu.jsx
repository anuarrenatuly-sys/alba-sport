import {
  X,
  Heart,
  User,
  Home,
  Grid3X3,
} from "lucide-react"

import { Link } from "react-router-dom"

function MobileMenu({ open, setOpen }) {
  return (
    <>
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition ${
          open
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      <div
        className={`fixed top-0 left-0 h-full w-[320px] bg-white z-50 transition-transform duration-300 p-8 ${
          open
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-10">

          <div>
            <p className="text-orange-500 text-sm tracking-[4px]">
              ALBA
            </p>

            <h2 className="text-3xl font-black">
              SPORT
            </h2>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="hover:rotate-90 transition"
          >
            <X />
          </button>

        </div>

        <nav className="flex flex-col gap-4">

          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-4 bg-gray-50 hover:bg-orange-50 p-4 rounded-2xl transition"
          >
            <Home size={20} />
            Басты бет
          </Link>

          <Link
            to="/catalog"
            onClick={() => setOpen(false)}
            className="flex items-center gap-4 bg-gray-50 hover:bg-orange-50 p-4 rounded-2xl transition"
          >
            <Grid3X3 size={20} />
            Каталог
          </Link>

          <Link
            to="/favorites"
            onClick={() => setOpen(false)}
            className="flex items-center gap-4 bg-gray-50 hover:bg-orange-50 p-4 rounded-2xl transition"
          >
            <Heart size={20} />
            Таңдаулылар
          </Link>

          <Link
            to="/profile"
            onClick={() => setOpen(false)}
            className="flex items-center gap-4 bg-gray-50 hover:bg-orange-50 p-4 rounded-2xl transition"
          >
            <User size={20} />
            Профиль
          </Link>

        </nav>

        <div className="mt-10 bg-black text-white rounded-3xl p-6">

          <p className="text-orange-500 text-sm mb-2">
            PREMIUM STORE
          </p>

          <h3 className="text-2xl font-black mb-3">
            ALBA SPORT
          </h3>

          <p className="text-gray-300 text-sm">
            Заманауи спорттық киімдер дүкені.
          </p>

        </div>

      </div>
    </>
  )
}

export default MobileMenu