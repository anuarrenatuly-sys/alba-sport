import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Categories from "./components/Categories"
import Products from "./components/Products"

function App() {
  return (
    <div className="bg-[#f7f7f7] min-h-screen">
      <Navbar />
      <Hero />
      <Categories />
      <Products />
    </div>
  )
}

export default App