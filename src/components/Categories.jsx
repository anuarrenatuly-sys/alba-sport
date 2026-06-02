function Categories() {
    const categories = [
      "Барлығы",
      "Худи",
      "Костюм",
      "Футболка",
      "Oversize",
    ]
  
    return (
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex gap-4 overflow-x-auto">
          {categories.map((item) => (
            <button
              key={item}
              className="px-6 py-3 bg-gray-100 hover:bg-black hover:text-white transition rounded-2xl whitespace-nowrap font-medium"
            >
              {item}
            </button>
          ))}
        </div>
      </section>
    )
  }
  
  export default Categories