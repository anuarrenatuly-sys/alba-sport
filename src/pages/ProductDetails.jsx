import { useParams } from "react-router-dom"
import products from "../data/products"
import { useCart } from "../context/CartContext"

function ProductDetails() {
  const { id } = useParams()

  const { addToCart } = useCart()

  const product = products.find(
    (item) => item.id === Number(id)
  )

  if (!product) {
    return (
      <div className="p-10 text-center text-2xl">
        Тауар табылмады
      </div>
    )
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <div className="grid md:grid-cols-2 gap-14 items-center">

        <div>
          <img
            src={product.image}
            alt=""
            className="w-full rounded-3xl object-cover"
          />
        </div>

        <div>
          <p className="text-orange-500 font-semibold mb-4">
            {product.category}
          </p>

          <h1 className="text-5xl font-black mb-6">
            {product.title}
          </h1>

          <p className="text-gray-500 text-lg mb-8">
            Заманауи спорт киімі.
            Жоғары сапалы материал.
            Күнделікті және жаттығуға ыңғайлы.
          </p>

          <div className="text-4xl font-black mb-8">
            {product.price}
          </div>

          <button
            onClick={() => addToCart(product)}
            className="bg-black text-white px-10 py-5 rounded-2xl hover:bg-orange-500 transition"
          >
            Себетке қосу
          </button>
        </div>

      </div>
    </section>
  )
}

export default ProductDetails