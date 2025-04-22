const Contact = () => {
  return (
    <section id="contato" className="py-16 px-6 bg-white text-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-[#213a77]">
          Fale com a gente
        </h2>
        <p className="mb-6">
          Estamos disponíveis para te ajudar com as melhores peças do mercado.
        </p>
        <a
          href="https://wa.me/5585981866717"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#25D366] text-white px-6 py-3 rounded-xl font-medium hover:opacity-90 transition"
        >
          Conversar no WhatsApp
        </a>
      </div>
    </section>
  );
};

export default Contact;
