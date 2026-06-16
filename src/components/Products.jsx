import { useState } from "react"

import productsData from "../data/products"
import ProductCard from "./ProductCard"

function Products() {
  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] =
    useState("Барлығы")

  const categories = [
    "Барлығы",
    "Худи",
    "Костюм",
    "Футболка",
    "Oversize",
    "Аяқ киім",
  ]

  const filteredProducts = productsData.filter(
    (product) => {
      const matchesSearch =
        product.title
          .toLowerCase()
          .includes(search.toLowerCase())

      const matchesCategory =
        selectedCategory === "Барлығы"
          ? true
          : product.category === selectedCategory

      return matchesSearch && matchesCategory
    }
  )

  return (
    <section className="max-w-7xl mx-auto px-4 pb-20">

      {/* top */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10">

        <h2 className="text-4xl font-black">
          Танымал тауарлар
        </h2>

        <input
          type="text"
          placeholder="Іздеу..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="border border-gray-300 px-5 py-3 rounded-2xl outline-none focus:border-black w-full md:w-[300px]"
        />
      </div>

      {/* categories */}
      <div className="flex gap-4 overflow-x-auto mb-10">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() =>
              setSelectedCategory(item)
            }
            className={`px-6 py-3 rounded-2xl whitespace-nowrap font-medium transition ${
              selectedCategory === item
                ? "bg-black text-white"
                : "bg-gray-100 hover:bg-black hover:text-white"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* products */}
      {filteredProducts.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.slice(0, 4).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-gray-500 text-xl">
          Тауар табылмады
        </div>
      )}

    </section>
  )
}

export default Products