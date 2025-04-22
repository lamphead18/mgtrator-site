const Hero = () => {
  return (
    <section
      className="py-16 px-6 bg-[#f5f5f5] text-center text-black"
      aria-label="Apresentação da MG Trator Peças"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-[#213a77]">
          Especialistas em peças e máquinas pesadas
        </h1>
        <p className="mt-4 text-lg">
          Trabalhamos com peças genuínas e compatíveis para as principais marcas
          do setor como Volvo, Komatsu, Caterpillar e muito mais.
        </p>
        <a
          href="#contato"
          className="inline-block mt-6 bg-[#25D366] text-white px-6 py-3 rounded-xl font-medium hover:opacity-90 transition"
        >
          Fale com um especialista
        </a>
      </div>
    </section>
  );
};

export default Hero;
