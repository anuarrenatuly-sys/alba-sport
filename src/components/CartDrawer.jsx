import {
    X,
    Plus,
    Minus,
    Trash2,
  } from "lucide-react"
  
  import { useCart } from "../context/CartContext"
  import { useState } from "react"
import CheckoutModal from "./CheckoutModal"
  
  function CartDrawer({ open, setOpen }) {
    const {
      cart,
      removeFromCart,
      increaseQuantity,
      decreaseQuantity,
    } = useCart()

    const [checkoutOpen, setCheckoutOpen] =
  useState(false)
  
    const totalPrice = cart.reduce((acc, item) => {
      const price = parseInt(
        item.price.replace(/\D/g, "")
      )
  
      return acc + price * item.quantity
    }, 0)
  
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
          className={`fixed top-0 right-0 h-full w-full sm:w-[450px] bg-white z-50 shadow-2xl transition-transform duration-300 flex flex-col ${
            open
              ? "translate-x-0"
              : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-5 border-b">
            <h2 className="text-2xl font-black">
              Себет
            </h2>
  
            <button onClick={() => setOpen(false)}>
              <X />
            </button>
          </div>
  
          <div className="flex-1 overflow-y-auto p-5 space-y-5">
            {cart.length === 0 ? (
              <p className="text-gray-500">
                Себет бос
              </p>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 border-b pb-5"
                >
                  <img
                    src={item.image}
                    alt=""
                    className="w-24 h-24 object-cover rounded-2xl"
                  />
  
                  <div className="flex-1">
                    <h3 className="font-bold">
                      {item.title}
                    </h3>
  
                    <p className="text-gray-500 text-sm mb-3">
                      {item.price}
                    </p>
  
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() =>
                          decreaseQuantity(item.id)
                        }
                        className="p-1 border rounded-lg"
                      >
                        <Minus size={16} />
                      </button>
  
                      <span>
                        {item.quantity}
                      </span>
  
                      <button
                        onClick={() =>
                          increaseQuantity(item.id)
                        }
                        className="p-1 border rounded-lg"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
  
                  <button
                    onClick={() =>
                      removeFromCart(item.id)
                    }
                  >
                    <Trash2 className="text-red-500" />
                  </button>
                </div>
              ))
            )}
          </div>
  
          <div className="border-t p-5 space-y-4">
            <div className="flex items-center justify-between text-xl font-black">
              <span>Жалпы:</span>
  
              <span>
                {totalPrice.toLocaleString()} ₸
              </span>
            </div>
  
            <button
  onClick={() =>
    setCheckoutOpen(true)
  }
  className="w-full bg-black text-white py-4 rounded-2xl hover:bg-orange-500 transition font-semibold"
>
  Тапсырысты рәсімдеу
</button>

          </div>
        </div>
        <CheckoutModal
  open={checkoutOpen}
  setOpen={setCheckoutOpen}
  cart={cart}
  totalPrice={totalPrice}
/>
      </>
    )
  }
  
  export default CartDrawer