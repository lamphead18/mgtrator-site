import { motion } from "framer-motion";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError("");

    try {
      const isDev =
        window.location.hostname === "localhost" ||
        window.location.hostname === "127.0.0.1";

      const formData = new FormData();
      formData.append("name", formState.name);
      formData.append("email", formState.email);
      formData.append("message", formState.message);
      formData.append("_captcha", "false");

      if (!isDev) {
        formData.append("_next", "https://www.mgtratorpecas.com.br/obrigado");
      }

      const response = await fetch(
        "https://formsubmit.co/comercial@mgtratorpecas.com.br",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error(
          "Falha ao enviar o formulário. Por favor, tente novamente."
        );
      }

      setFormSuccess(true);
      setFormState({ name: "", email: "", message: "" });

      if (isDev) {
        setTimeout(() => {
          navigate("/obrigado");
        }, 1500);
      }
    } catch (error) {
      setFormError(
        error instanceof Error ? error.message : "Erro ao enviar formulário"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

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
        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-[#213a77] text-shadow-md">
          Fale com a gente
        </h2>
        <p className="mb-6 text-shadow-md">
          Estamos disponíveis para te ajudar com as melhores peças e preços do
          mercado.
        </p>

        <a
          href="https://wa.me/5563999828455"
          target="_blank"
          rel="noopener noreferrer"
          className="text-shadow-md inline-block bg-[#25D366] text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 ease-in-out transform hover:scale-105 hover:opacity-90 mb-10"
        >
          Conversar no WhatsApp
        </a>

        <div className="bg-[#f3f4f6] p-8 rounded-xl shadow-md text-left">
          <h3 className="text-shadow-md text-xl md:text-2xl font-semibold mb-4 text-[#213a77]">
            Solicite um orçamento
          </h3>

          {formSuccess ? (
            <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg mb-4">
              Mensagem enviada com sucesso! Redirecionando...
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 w-full"
            >
              {formError && (
                <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg">
                  {formError}
                </div>
              )}

              <input
                type="text"
                name="name"
                value={formState.name}
                onChange={handleChange}
                placeholder="Seu nome"
                required
                disabled={isSubmitting}
                className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#213a77] disabled:bg-gray-100"
              />
              <input
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                placeholder="Seu e-mail"
                required
                disabled={isSubmitting}
                className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#213a77] disabled:bg-gray-100"
              />
              <textarea
                name="message"
                value={formState.message}
                onChange={handleChange}
                placeholder="Descreva sua necessidade..."
                required
                disabled={isSubmitting}
                className="p-3 rounded-lg border border-gray-300 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#213a77] disabled:bg-gray-100"
              ></textarea>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-[#213a77] text-white py-3 px-6 rounded-xl font-medium transition-all ${
                  isSubmitting
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:opacity-90"
                }`}
              >
                {isSubmitting ? "Enviando..." : "Enviar"}
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
