import Hero from "../components/Hero"
import Products from "../components/Products"

function Home() {

  return (
    <>
    <div id="top"></div>

      <Hero />
      <Products />
      <section className="max-w-7xl mx-auto px-4 py-24">
  <div className="bg-gradient-to-r from-black to-gray-900 rounded-[40px] overflow-hidden">

    <div className="grid lg:grid-cols-2 items-center">

      <div className="p-12 lg:p-16 text-white">
        <span className="text-sm uppercase tracking-[4px] text-gray-400">
          ALBA SPORT
        </span>

        <h2 className="text-5xl lg:text-6xl font-black mt-4 mb-6">
          Premium Sportwear
        </h2>

        <p className="text-lg text-gray-300 leading-8 mb-8">
          Заманауи стиль, жоғары сапа және
          максималды жайлылық. ALBA SPORT —
          белсенді өмір салтын ұстанатындар үшін.
        </p>

        <div className="grid grid-cols-3 gap-6">
          <div>
            <h3 className="text-3xl font-black">
              100+
            </h3>
            <p className="text-gray-400">
              Өнім
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-black">
              1000+
            </h3>
            <p className="text-gray-400">
              Клиент
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-black">
              24/7
            </h3>
            <p className="text-gray-400">
              Қолдау
            </p>
          </div>
        </div>
      </div>

      <div className="h-full">
        <img
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200"
          alt="Sport"
          className="w-full h-full object-cover min-h-[500px]"
        />
      </div>

    </div>
  </div>
</section>

<section
  id="brands"
  className="max-w-7xl mx-auto px-4 py-24"
>

<h2 className="text-5xl lg:text-7xl font-black text-center mb-16">
  Танымал брендтер
</h2>

<div className="grid md:grid-cols-3 gap-8">

<div className="relative h-[320px] rounded-[32px] overflow-hidden group cursor-pointer">
  <img
    src="https://cms.oryx.kz/storage/images/img_products/image28.png"
    alt=""
    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
  />

  <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-8">
    <h3 className="text-white text-4xl font-black">
      NIKE
    </h3>

    <p className="text-white/80 mt-2">
      Just Do It
    </p>
  </div>
</div>

<div className="relative h-[320px] rounded-[32px] overflow-hidden group cursor-pointer">
  <img
    src="https://catalogi.ru/upload/resize_cache/iblock/fa9/450_300_0/ydzuupi0xw2e7xfxp7xaan5cplpm1mko.jpeg"
    alt=""
    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
  />

  <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-8">
    <h3 className="text-white text-4xl font-black">
      ADIDAS
    </h3>

    <p className="text-white/80 mt-2">
      Impossible Is Nothing
    </p>
  </div>
</div>

<div className="relative h-[320px] rounded-[32px] overflow-hidden group cursor-pointer">
  <img
    src="https://papik.pro/uploads/posts/2021-11/1636097577_1-papik-pro-p-logotip-puma-foto-1.png"
    alt=""
    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
  />

  <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-8">
    <h3 className="text-white text-4xl font-black">
      PUMA
    </h3>

    <p className="text-white/80 mt-2">
      Forever Faster
    </p>
  </div>
</div>

</div>

  <section className="max-w-7xl mx-auto px-4 py-24">

  <div className="text-center mb-16">
    <p className="uppercase tracking-[4px] text-orange-500 mb-3">
      WHY CHOOSE US
    </p>

    <h2 className="text-5xl font-black">
      Неге ALBA SPORT?
    </h2>
  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

    <div className="bg-white rounded-[32px] p-10 shadow hover:-translate-y-2 transition">
      <div className="text-5xl mb-5">🚚</div>

      <h3 className="text-2xl font-bold mb-3">
        Жылдам жеткізу
      </h3>

      <p className="text-gray-500">
        Қазақстан бойынша 1–3 күн ішінде жеткізу.
      </p>
    </div>

    <div className="bg-white rounded-[32px] p-10 shadow hover:-translate-y-2 transition">
      <div className="text-5xl mb-5">🔒</div>

      <h3 className="text-2xl font-bold mb-3">
        Қауіпсіз төлем
      </h3>

      <p className="text-gray-500">
        Барлық төлемдер қауіпсіз қорғалған.
      </p>
    </div>

    <div className="bg-white rounded-[32px] p-10 shadow hover:-translate-y-2 transition">
      <div className="text-5xl mb-5">⭐</div>

      <h3 className="text-2xl font-bold mb-3">
        Жоғары сапа
      </h3>

      <p className="text-gray-500">
        Тек сапалы және тексерілген өнімдер.
      </p>
    </div>

    <div className="bg-black text-white rounded-[32px] p-10 hover:-translate-y-2 transition">
      <div className="text-5xl mb-5">🎧</div>

      <h3 className="text-2xl font-bold mb-3">
        24/7 Қолдау
      </h3>

      <p className="text-gray-300">
        Кез келген уақытта көмек көрсету.
      </p>
    </div>

  </div>

</section>

</section>

<section
  id="contact"
  className="max-w-7xl mx-auto px-4 pb-24"
>

  <div className="bg-gradient-to-r from-black via-gray-900 to-black rounded-[40px] overflow-hidden">

    <div className="grid lg:grid-cols-2 items-center">

      <div className="p-12 lg:p-16 text-white">

        <p className="uppercase tracking-[4px] text-orange-500 mb-4">
          CONTACT US
        </p>

        <h2 className="text-5xl font-black mb-6">
          Бізбен байланыс
        </h2>

        <p className="text-gray-400 text-lg leading-8 mb-10">
          Сұрақтарыңыз болса немесе тапсырыс бойынша
          кеңес қажет болса, бізбен кез келген уақытта
          хабарласа аласыз.
        </p>

        <div className="space-y-6">

          <div>
            <p className="text-gray-500">
              Телефон
            </p>

            <h3 className="text-2xl font-bold">
            +7 747 910 5310
            </h3>
          </div>

          <div>
            <p className="text-gray-500">
              Email
            </p>

            <h3 className="text-2xl font-bold">
              alba.sport@mail.com
            </h3>
          </div>

          <div>
            <p className="text-gray-500">
              Мекенжай
            </p>

            <h3 className="text-2xl font-bold">
              Алматы, Қазақстан
            </h3>
          </div>

        </div>

      </div>

      <div className="h-full">
        <img
          src="https://img.magnific.com/free-photo/smiling-secretary-typing-laptop_1098-3236.jpg?semt=ais_hybrid&w=740&q=80"
          alt=""
          className="w-full h-full object-cover min-h-[500px]"
        />
      </div>

    </div>

  </div>

</section>
    </>
    
  )
}

export default Home