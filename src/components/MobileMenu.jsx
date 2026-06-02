import { X } from "lucide-react"
import { Link } from "react-router-dom"

function MobileMenu({ open, setOpen }) {
  return (
    <>
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/50 z-40 transition ${
          open
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      <div
        className={`fixed top-0 left-0 h-full w-[280px] bg-white z-50 transition-transform duration-300 p-6 ${
          open
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-black">
            MENU
          </h2>

          <button onClick={() => setOpen(false)}>
            <X />
          </button>
        </div>

        <nav className="flex flex-col gap-6 text-lg font-medium">
  <Link to="/">Басты бет</Link>
  <Link to="/favorites">Таңдаулылар</Link>
  <a href="#">Ерлер</a>
  <a href="#">Әйелдер</a>
</nav>
      </div>
    </>
  )
}

export default MobileMenu