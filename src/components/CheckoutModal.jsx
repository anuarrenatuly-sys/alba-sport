import { useState } from "react"
import { X } from "lucide-react"

function CheckoutModal({
  open,
  setOpen,
  cart,
  totalPrice,
}) {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] =
    useState("")
  const [comment, setComment] =
    useState("")

  if (!open) return null

  const handleSubmit = () => {
    const products = cart
      .map(
        (item) =>
          `${item.title} x${item.quantity}`
      )
      .join("\n")
  
    const message = `
  🛒 Жаңа тапсырыс
  
  👤 Аты: ${name}
  📞 Телефон: ${phone}
  📍 Мекенжай: ${address}
  
  💬 Түсініктеме:
  ${comment}
  
  📦 Тауарлар:
  ${products}
  
  💰 Жалпы:
  ${totalPrice.toLocaleString()} ₸
  `
  
    const whatsappUrl =
      `https://wa.me/77479105310?text=${encodeURIComponent(message)}`
  
    window.open(
      whatsappUrl,
      "_blank"
    )
  
    setOpen(false)
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[999]">
      <div className="bg-white rounded-3xl w-full max-w-lg p-8 relative">

        <button
          onClick={() => setOpen(false)}
          className="absolute right-5 top-5"
        >
          <X />
        </button>

        <h2 className="text-3xl font-black mb-6">
          Тапсырысты рәсімдеу
        </h2>

        <div className="space-y-4">

          <input
            placeholder="Аты-жөні"
            className="w-full border p-3 rounded-xl"
            onChange={(e) =>
              setName(e.target.value)
            }
          />

          <input
            placeholder="Телефон"
            className="w-full border p-3 rounded-xl"
            onChange={(e) =>
              setPhone(e.target.value)
            }
          />

          <input
            placeholder="Мекенжай"
            className="w-full border p-3 rounded-xl"
            onChange={(e) =>
              setAddress(
                e.target.value
              )
            }
          />

          <textarea
            placeholder="Түсініктеме"
            className="w-full border p-3 rounded-xl h-24"
            onChange={(e) =>
              setComment(
                e.target.value
              )
            }
          />

          <button
            onClick={handleSubmit}
            className="w-full bg-black text-white py-4 rounded-xl"
          >
            Тапсырыс беру
          </button>

        </div>
      </div>
    </div>
  )
}

export default CheckoutModal