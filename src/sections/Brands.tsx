const Brands = () => {
  return (
    <section id="marcas" className="py-16 px-6 bg-[#f5f5f5] text-black">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-8 text-[#213a77]">
          Trabalhamos com as principais marcas
        </h2>
        <div className="flex flex-wrap justify-center gap-6 items-center">
          <div className="w-32 h-16 bg-gray-300 rounded-md flex items-center justify-center">
            Volvo
          </div>
          <div className="w-32 h-16 bg-gray-300 rounded-md flex items-center justify-center">
            Caterpillar
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
