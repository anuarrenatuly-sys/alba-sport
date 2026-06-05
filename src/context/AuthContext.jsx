import {
    createContext,
    useContext,
    useEffect,
    useState,
  } from "react"
  
  const AuthContext = createContext()
  
  export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
      const saved = localStorage.getItem("user")
      return saved ? JSON.parse(saved) : null
    })
  
    useEffect(() => {
      localStorage.setItem(
        "user",
        JSON.stringify(user)
      )
    }, [user])
  
    const login = (email, password) => {
      const savedUser = JSON.parse(
        localStorage.getItem("registeredUser")
      )
  
      if (
        savedUser &&
        savedUser.email === email &&
        savedUser.password === password
      ) {
        setUser(savedUser)
        return true
      }
  
      return false
    }
  
    const register = (data) => {
      localStorage.setItem(
        "registeredUser",
        JSON.stringify(data)
      )
  
      setUser(data)
    }
  
    const logout = () => {
      setUser(null)
    }
  
    return (
      <AuthContext.Provider
        value={{
          user,
          login,
          register,
          logout,
        }}
      >
        {children}
      </AuthContext.Provider>
    )
  }
  
  export const useAuth = () =>
    useContext(AuthContext)