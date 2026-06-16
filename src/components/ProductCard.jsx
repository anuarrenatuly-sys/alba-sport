import { Heart } from "lucide-react"
import { useCart } from "../context/CartContext"
import { Link } from "react-router-dom"
import { useFavorites } from "../context/FavoritesContext"

function ProductCard({ product }) {
  const { addToCart } = useCart()

  const { toggleFavorite, isFavorite } =
    useFavorites()

  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-300">
      
      <div className="relative overflow-hidden">
      <div className="absolute top-4 left-4 z-10 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
  NEW
</div>

<div className="absolute bottom-4 left-4 z-10 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-semibold">
  ⭐ 4.9
</div>
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt=""
          className="h-[350px] w-full object-cover group-hover:scale-110 transition duration-500"
        />
      </Link>
      <button
  onClick={() =>
    toggleFavorite(product)
  }
  className="absolute top-4 right-4 bg-white p-2 rounded-full shadow"
>
  <Heart
    className={`w-5 h-5 ${
      isFavorite(product.id)
        ? "fill-red-500 text-red-500"
        : ""
    }`}
  />
</button>
      </div>

      <div className="p-5 space-y-2">
        <p className="text-sm text-gray-500 mb-2">
          {product.category}
        </p>

        <Link to={`/product/${product.id}`}>
  <h3 className="text-xl font-bold mb-2 hover:text-orange-500 transition">
    {product.title}
  </h3>

  <p className="text-sm text-gray-500">
  Жоғары сапалы спорттық киім
</p>
</Link>

        <div className="flex items-center justify-between">
          <p className="font-black text-lg">
            {product.price}
          </p>

          <button
  onClick={() => addToCart(product)}
  className="bg-black text-white px-5 py-2 rounded-xl hover:bg-orange-500 transition hover:scale-105"
>
  Себетке қосу
</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard