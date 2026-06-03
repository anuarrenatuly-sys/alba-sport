function Footer() {
    return (
      <footer className="bg-black text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-4 gap-10">
  
          <div>
            <h2 className="text-3xl font-black mb-4">
              ALBA SPORT
            </h2>
  
            <p className="text-gray-400">
              Қазақстандағы заманауи спорт киімдер дүкені.
            </p>
          </div>
  
          <div>
            <h3 className="font-bold mb-4">
              Навигация
            </h3>
  
            <div className="flex flex-col gap-3 text-gray-400">
              <a href="#">Басты бет</a>
              <a href="#">Каталог</a>
              <a href="#">Байланыс</a>
            </div>
          </div>
  
          <div>
            <h3 className="font-bold mb-4">
              Категория
            </h3>
  
            <div className="flex flex-col gap-3 text-gray-400">
              <a href="#">Худи</a>
              <a href="#">Костюм</a>
              <a href="#">Oversize</a>
            </div>
          </div>
  
          <div>
            <h3 className="font-bold mb-4">
              Байланыс
            </h3>
  
            <div className="flex flex-col gap-3 text-gray-400">
              <p>+7 777 777 77 77</p>
              <p>Instagram: @qadamsport</p>
            </div>
          </div>
  
        </div>
      </footer>
    )
  }
  
  export default Footer