import {
    User,
    Heart,
    Package,
    LogOut,
    Mail,
  } from "lucide-react"
  
  import { useAuth } from "../context/AuthContext"
  import { useFavorites } from "../context/FavoritesContext"
import { useCart } from "../context/CartContext"

  function Profile() {
    const { user, logout } = useAuth()
    const { favorites } = useFavorites()
const { cart } = useCart()
  
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
  
        {/* Hero */}
        <div className="bg-gradient-to-r from-black via-gray-900 to-black rounded-[40px] p-10 md:p-14 text-white mb-10">
  
          <div className="flex flex-col md:flex-row items-center gap-8">
  
            <div className="w-32 h-32 rounded-full bg-white text-black flex items-center justify-center">
              <User size={55} />
            </div>
  
            <div>
              <p className="uppercase tracking-[4px] text-gray-400 mb-2">
                ALBA SPORT MEMBER
              </p>
  
              <h1 className="text-4xl md:text-5xl font-black">
                {user?.name || "Пайдаланушы"}
              </h1>
  
              <div className="flex items-center gap-2 mt-4 text-gray-300">
                <Mail size={18} />
                <span>{user?.email}</span>
              </div>
            </div>
  
          </div>
        </div>

<div className="bg-white rounded-[32px] p-8 shadow mb-10">

<h2 className="text-4xl font-black mb-8">
    Таңдаулы тауарлар
  </h2>

  {favorites.length === 0 ? (
    <p className="text-gray-500">
      Таңдаулы тауарлар жоқ
    </p>
  ) : (
    <div className="grid md:grid-cols-3 gap-6">

      {favorites.map((item) => (
        <div
          key={item.id}
          className="border rounded-2xl p-4"
        >
          <img
            src={item.image}
            alt=""
            className="h-48 w-full object-cover rounded-xl mb-3"
          />

          <h3 className="font-bold">
            {item.title}
          </h3>

          <p className="text-gray-500">
            {item.price}
          </p>
        </div>
      ))}

    </div>
  )}

</div>

<div className="bg-white rounded-[32px] p-8 shadow mb-10">

<h2 className="text-4xl font-black mb-8">
    Себеттегі тауарлар
  </h2>

  {cart.length === 0 ? (
    <p className="text-gray-500">
      Себет бос
    </p>
  ) : (
    <div className="space-y-4">

      {cart.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-4 border-b pb-4"
        >
          <img
            src={item.image}
            alt=""
            className="w-20 h-20 rounded-xl object-cover"
          />

          <div>
            <h3 className="font-bold">
              {item.title}
            </h3>

            <p className="text-gray-500">
              {item.price}
            </p>
          </div>
        </div>
      ))}

    </div>
  )}

</div>

<div className="bg-white rounded-[32px] p-8 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition duration-300">

<h2 className="text-4xl font-black mb-8">
    Аккаунт
  </h2>

  <button
    onClick={logout}
    className="bg-black text-white px-8 py-4 rounded-2xl hover:bg-orange-500 transition"
  >
    Аккаунттан шығу
  </button>

</div>
  
      </div>
    )
  }
  
  export default Profile