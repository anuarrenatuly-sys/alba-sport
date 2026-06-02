import { useFavorites } from "../context/FavoritesContext"

import ProductCard from "../components/ProductCard"

function Favorites() {
  const { favorites } = useFavorites()

  return (
    <section className="max-w-7xl mx-auto px-4 py-20">

      <h1 className="text-5xl font-black mb-10">
        Таңдаулылар
      </h1>

      {favorites.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {favorites.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <h2 className="text-3xl font-bold mb-4">
            Таңдаулы бос
          </h2>

          <p className="text-gray-500">
            Сіз әлі тауар қоспадыңыз
          </p>
        </div>
      )}

    </section>
  )
}

export default Favorites