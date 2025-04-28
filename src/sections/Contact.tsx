import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      id="contato"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-16 px-6 bg-white text-black"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-[#213a77]">
          Fale com a gente
        </h2>
        <p className="mb-6">
          Estamos disponíveis para te ajudar com as melhores peças do mercado.
        </p>
        <a
          href="https://wa.me/5563999828455"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#25D366] text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 ease-in-out transform hover:scale-105 hover:opacity-90"
        >
          Conversar no WhatsApp
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
