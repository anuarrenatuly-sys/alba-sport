import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import products from "../data/products"
import { useCart } from "../context/CartContext"

function ProductDetails() {
  const { id } = useParams()

  const { addToCart } = useCart()

  const [selectedSize, setSelectedSize] =
  useState("M")

const [selectedColor, setSelectedColor] =
  useState("black")

  const product = products.find(
    (item) => item.id === Number(id)
  )

  const [reviews, setReviews] = useState(() => {
    const saved = localStorage.getItem(
      `reviews-${id}`
    )
  
    return saved
      ? JSON.parse(saved)
      : [
          {
            name: "Аружан",
            rating: "⭐⭐⭐⭐⭐",
            text: "Өте сапалы өнім. Материалы жақсы, өлшемі дәл келді.",
          },
          {
            name: "Нұржан",
            rating: "⭐⭐⭐⭐⭐",
            text: "Жеткізу жылдам болды. Ұнады.",
          },
        ]
  })
  
  const [reviewName, setReviewName] = useState("")
  const [reviewText, setReviewText] = useState("")

  const addReview = () => {
    if (!reviewName || !reviewText) return
  
    setReviews([
      ...reviews,
      {
        name: reviewName,
        rating: "⭐⭐⭐⭐⭐",
        text: reviewText,
      },
    ])
  
    setReviewName("")
    setReviewText("")
  }
  useEffect(() => {
    localStorage.setItem(
      `reviews-${id}`,
      JSON.stringify(reviews)
    )
  }, [reviews, id])

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
  className="w-full rounded-3xl object-cover hover:scale-105 transition duration-500"
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

          <div className="flex items-center gap-2 mb-8">
  <span className="text-yellow-500 text-xl">
    ⭐⭐⭐⭐⭐
  </span>

  <span className="text-gray-500">
    4.9 (124 пікір)
  </span>
</div>

<div className="mb-8">
  <p className="font-bold mb-3">
    Өлшем
  </p>

  <div className="flex gap-3">
  {
  (product.category === "Аяқ киім"
    ? ["40", "41", "42", "43", "44"]
    : ["S", "M", "L", "XL"]
  ).map((size) => (
        <button
          key={size}
          onClick={() =>
            setSelectedSize(size)
          }
          className={`px-4 py-2 rounded-xl border transition ${
            selectedSize === size
              ? "bg-black text-white"
              : "bg-white"
          }`}
        >
          {size}
        </button>
      )
    )}
  </div>
</div>


{product.category !== "Аяқ киім" && (
<div className="mb-8">
  <p className="font-bold mb-3">
    Түс
  </p>

  <div className="flex gap-3">

    <button
      onClick={() =>
        setSelectedColor("black")
      }
      className={`w-8 h-8 rounded-full bg-black border-4 ${
        selectedColor === "black"
          ? "border-orange-500"
          : "border-transparent"
      }`}
    />

    <button
      onClick={() =>
        setSelectedColor("white")
      }
      className={`w-8 h-8 rounded-full bg-white border-4 ${
        selectedColor === "white"
          ? "border-orange-500"
          : "border-gray-300"
      }`}
    />

    <button
      onClick={() =>
        setSelectedColor("blue")
      }
      className={`w-8 h-8 rounded-full bg-blue-500 border-4 ${
        selectedColor === "blue"
          ? "border-orange-500"
          : "border-transparent"
      }`}
    />

  </div>
</div>
)}

          <button
            onClick={() => addToCart(product)}
            className="bg-black text-white px-10 py-5 rounded-2xl hover:bg-orange-500 transition"
          >
            Себетке қосу
          </button>

        </div>

      </div>

      <div className="mt-24">

<div className="bg-white rounded-[32px] p-10 shadow mb-10">
  <h2 className="text-3xl font-black mb-6">
    Сипаттама
  </h2>

  <p className="text-gray-600 leading-8">
    Жоғары сапалы спорттық киім.
    Күнделікті қолдануға және жаттығуға арналған.
    Заманауи дизайн мен жайлылықты біріктіреді.
  </p>
</div>

<div>
  <h2 className="text-3xl font-black mb-8">
    Пікірлер
  </h2>

  <div className="bg-white p-6 rounded-3xl shadow mb-8">

  <input
    value={reviewName}
    onChange={(e) =>
      setReviewName(e.target.value)
    }
    placeholder="Атыңыз"
    className="w-full border p-3 rounded-xl mb-4"
  />

  <textarea
    value={reviewText}
    onChange={(e) =>
      setReviewText(e.target.value)
    }
    placeholder="Пікіріңіз"
    className="w-full border p-3 rounded-xl h-24 mb-4"
  />

  <button
    onClick={addReview}
    className="bg-black text-white px-6 py-3 rounded-2xl hover:bg-orange-500 transition"
  >
    Пікір қосу
  </button>

</div>

<div className="grid md:grid-cols-3 gap-6">

  {reviews.map((review, index) => (
    <div
      key={index}
      className="bg-white p-6 rounded-3xl shadow"
    >
      <div className="flex justify-between mb-3">
        <h3 className="font-bold">
          {review.name}
        </h3>

        <span>
          {review.rating}
        </span>
      </div>

      <p className="text-gray-600">
        {review.text}
      </p>
    </div>
  ))}

</div>

</div>

</div>

    </section>
  )
}

export default ProductDetails