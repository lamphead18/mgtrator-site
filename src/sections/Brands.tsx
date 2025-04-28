import { motion } from "framer-motion";
import volvoLogo from "../assets/logo-volvo-group.svg";
import caterpillarLogo from "../assets/caterpillar.svg";

const Brands = () => {
  return (
    <section id="marcas" className="py-16 px-6 bg-[#f5f5f5] text-black">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-12 text-[#213a77]">
          Trabalhamos com as principais marcas
        </h2>

        <div className="flex flex-wrap justify-center gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-48 h-24 p-2 flex items-center justify-center overflow-hidden"
          >
            <img
              src={volvoLogo}
              alt="Logo Volvo"
              className="object-contain h-12 md:h-16 transition-transform transition-opacity duration-300 ease-in-out hover:scale-105 hover:opacity-80"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-48 h-24 p-2 flex items-center justify-center overflow-hidden"
          >
            <img
              src={caterpillarLogo}
              alt="Logo Caterpillar"
              className="object-contain h-12 md:h-16 transition-transform transition-opacity duration-300 ease-in-out hover:scale-105 hover:opacity-80"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
