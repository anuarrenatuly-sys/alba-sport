import { useState } from "react"
import { X } from "lucide-react"
import { useAuth } from "../context/AuthContext"

function AuthModal({ open, setOpen }) {
  const { user, login, register, logout } =
    useAuth()

  const [isLogin, setIsLogin] =
    useState(true)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  if (!open) return null

  const handleLogin = (e) => {
    e.preventDefault()

    const success = login(
      email,
      password
    )

    if (success) {
      setOpen(false)
    } else {
      alert("Қате логин немесе пароль")
    }
  }

  const handleRegister = (e) => {
    e.preventDefault()

    register({
      name,
      email,
      password,
    })

    setOpen(false)
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[999]">
      <div className="bg-white rounded-3xl w-full max-w-md p-8 relative">

        <button
          onClick={() => setOpen(false)}
          className="absolute right-5 top-5"
        >
          <X />
        </button>

        <h2 className="text-3xl font-black text-center mb-8">
  ALBA SPORT
</h2>

        {user ? (
          <>
            <h2 className="text-3xl font-black mb-6">
              Сәлем, {user.name} 👋
            </h2>

            <p className="mb-3">
              {user.email}
            </p>

            <button
              onClick={logout}
              className="w-full bg-red-500 text-white py-3 rounded-xl"
            >
              Шығу
            </button>
          </>
        ) : (
          <>
            

            {isLogin ? (
              <form
                onSubmit={handleLogin}
                className="space-y-4"
              >
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border p-3 rounded-xl"
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                />

                <input
                  type="password"
                  placeholder="Құпия сөз"
                  className="w-full border p-3 rounded-xl"
                  onChange={(e) =>
                    setPassword(
                      e.target.value
                    )
                  }
                />

<button className="w-full bg-black text-white py-3 rounded-xl">
  Кіру
</button>

<p className="text-center mt-4">
  Аккаунтыңыз жоқ па?

  <button
    type="button"
    onClick={() => setIsLogin(false)}
    className="ml-2 font-bold underline"
  >
    Тіркелу
  </button>
</p>

</form>
            ) : (
              <form
                onSubmit={
                  handleRegister
                }
                className="space-y-4"
              >
                <input
                  placeholder="Аты"
                  className="w-full border p-3 rounded-xl"
                  onChange={(e) =>
                    setName(
                      e.target.value
                    )
                  }
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border p-3 rounded-xl"
                  onChange={(e) =>
                    setEmail(
                      e.target.value
                    )
                  }
                />

                <input
                  type="password"
                  placeholder="Құпия сөз"
                  className="w-full border p-3 rounded-xl"
                  onChange={(e) =>
                    setPassword(
                      e.target.value
                    )
                  }
                />

<button className="w-full bg-black text-white py-3 rounded-xl">
  Тіркелу
</button>

<p className="text-center mt-4">
  Аккаунтыңыз бар ма?

  <button
    type="button"
    onClick={() => setIsLogin(true)}
    className="ml-2 font-bold underline"
  >
    Кіру
  </button>
</p>

</form>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default AuthModal