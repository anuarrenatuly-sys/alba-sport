import { useState } from "react"
import products from "../data/products"
import ProductCard from "../components/ProductCard"

function Catalog() {
  const [search, setSearch] = useState("")
  const [category, setCategory] =
    useState("Барлығы")

  const categories = [
    "Барлығы",
    "Худи",
    "Костюм",
    "Футболка",
    "Oversize",
    "Аяқ киім",
  ]

  const filteredProducts =
    products.filter((product) => {
      const matchCategory =
        category === "Барлығы"
          ? true
          : product.category === category

      const matchSearch =
        product.title
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )

      return (
        matchCategory && matchSearch
      )
    })

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">

      <div className="mb-12">
        <p className="text-orange-500 uppercase tracking-[4px] mb-3">
          ALBA SPORT
        </p>

        <h1 className="text-6xl font-black mb-4">
          Каталог
        </h1>

        <p className="text-gray-500 text-lg">
          Барлық спорттық тауарлар
          бір жерде.
        </p>
      </div>

      <input
        type="text"
        placeholder="Тауар іздеу..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="w-full border rounded-2xl p-4 mb-8"
      />

      <div className="flex flex-wrap gap-3 mb-12">

        {categories.map((item) => (
          <button
            key={item}
            onClick={() =>
              setCategory(item)
            }
            className={`px-5 py-3 rounded-2xl transition ${
              category === item
                ? "bg-black text-white"
                : "bg-gray-100"
            }`}
          >
            {item}
          </button>
        ))}

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {filteredProducts.map(
          (product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          )
        )}

      </div>

    </div>
  )
}

export default Catalog