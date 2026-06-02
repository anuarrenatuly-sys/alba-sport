import { motion } from "framer-motion"

function Hero() {
  return (
    <section className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-24 grid md:grid-cols-2 items-center gap-10">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-orange-500 font-semibold mb-4">
            ЖАҢА КОЛЛЕКЦИЯ
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            SPORT
            <br />
            STYLE
          </h1>

          <p className="text-gray-400 mb-8 text-lg">
            Заманауи спорт киімдері.
            Ыңғайлы. Стильді. Сапалы.
          </p>

          <button className="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-2xl font-semibold">
            Каталог ашу
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f"
            alt=""
            className="rounded-3xl h-[500px] object-cover"
          />
        </motion.div>

      </div>
    </section>
  )
}

export default Hero