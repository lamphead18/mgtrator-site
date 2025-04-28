import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-16 px-6 bg-[#f5f5f5] text-center text-black"
      aria-label="Apresentação da MG Trator Peças"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-[#213a77]">
          Especialistas em peças e máquinas pesadas
        </h1>
        <p className="mt-4 text-lg">
          Trabalhamos com peças genuínas e compatíveis para as principais marcas
          do setor como Volvo e Caterpillar.
        </p>
        <a
          href="#contato"
          className="inline-block mt-6 bg-[#25D366] text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 ease-in-out transform hover:scale-105 hover:opacity-90"
        >
          Fale com um especialista
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
