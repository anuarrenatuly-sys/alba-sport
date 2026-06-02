import { Heart } from "lucide-react"
import { useCart } from "../context/CartContext"
import { Link } from "react-router-dom"
import { useFavorites } from "../context/FavoritesContext"

function ProductCard({ product }) {
  const { addToCart } = useCart()

  const { toggleFavorite, isFavorite } =
    useFavorites()

  return (
    <div className="group bg-white dark:bg-[#1a1a1a] rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition duration-300">
      
      <div className="relative overflow-hidden">
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

      <div className="p-5">
        <p className="text-sm text-gray-500 mb-2">
          {product.category}
        </p>

        <Link to={`/product/${product.id}`}>
  <h3 className="text-xl font-bold mb-2 hover:text-orange-500 transition">
    {product.title}
  </h3>
</Link>

        <div className="flex items-center justify-between">
          <p className="font-black text-lg">
            {product.price}
          </p>

          <button
            onClick={() => addToCart(product)}
            className="bg-black text-white px-5 py-2 rounded-xl hover:bg-orange-500 transition"
          >
            Сатып алу
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard