function Footer() {
  return (
    <footer className="bg-black text-white mt-24">

      <div className="max-w-7xl mx-auto px-4 py-20">

        <div className="grid md:grid-cols-4 gap-12">

          <div>
            <h2 className="text-4xl font-black mb-5">
              ALBA SPORT
            </h2>

            <p className="text-gray-400 leading-7">
              Premium sportwear store.
              Заманауи стиль, жоғары сапа және
              максималды жайлылық.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-5">
              Каталог
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">
              <a href="#">Ерлер</a>
              <a href="#">Әйелдер</a>
              <a href="#">Худи</a>
              <a href="#">Аяқ киім</a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-5">
              Аккаунт
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">
              <a href="#">Профиль</a>
              <a href="#">Таңдаулылар</a>
              <a href="#">Себет</a>
              <a href="#">Тапсырыстар</a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-5">
              Байланыс
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">
              <p>+7 707 000 00 00</p>
              <p>alba.sport@mail.com</p>
              <p>Алматы, Қазақстан</p>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500 text-sm">
            © 2026 ALBA SPORT. Барлық құқықтар қорғалған.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0 text-gray-400">
            <a href="#">Instagram</a>
            <a href="#">Telegram</a>
            <a href="https://wa.me/77479105310">WhatsApp</a>
          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer