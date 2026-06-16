import { motion } from "framer-motion"
import { Link } from "react-router-dom"

function Hero() {
  return (
    <section className="bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-24">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-orange-500 font-bold tracking-[4px] mb-4">
              NEW COLLECTION 2026
            </p>

            <h1 className="text-6xl lg:text-8xl font-black leading-none mb-6">
              ALBA
              <br />
              SPORT
            </h1>

            <p className="text-xl text-gray-400 max-w-lg leading-8 mb-10">
            Белсенді өмір салтын ұстанатындарға арналған премиум спорттық киімдер.

Заманауи дизайн, жоғары сапалы материалдар және мінсіз жайлылық – ALBA SPORT таңдауы.
            </p>

            <div className="flex gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-2xl font-bold transition">
                Қазір сатып алу
              </button>

              <Link to="/catalog">
  <button className="border border-white/20 hover:border-white px-8 py-4 rounded-2xl transition">
    Каталог
  </button>
</Link>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-14">

              <div>
                <h3 className="text-4xl font-black">
                  1000+
                </h3>

                <p className="text-gray-500">
                  Клиент
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-black">
                  50+
                </h3>

                <p className="text-gray-500">
                  Бренд
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-black">
                  24/7
                </h3>

                <p className="text-gray-500">
                  Қолдау
                </p>
              </div>

            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-orange-500 blur-[150px] opacity-20" />

            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200"
              alt=""
              className="relative rounded-[40px] h-[700px] w-full object-cover"
            />
          </motion.div>

        </div>

      </div>
    </section>
  )
}

export default Hero