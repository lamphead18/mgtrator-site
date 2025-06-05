import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Thanks = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-white px-6 text-center">
      <div className="max-w-xl">
        <h1 className="text-3xl md:text-5xl font-bold text-[#213a77] mb-6 text-shadow-md">
          Obrigado pelo contato!
        </h1>
        <p className="text-lg text-gray-700 mb-10">
          Recebemos sua mensagem e em breve nossa equipe entrará em contato com
          você.
        </p>
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 bg-[#213a77] text-white px-6 py-3 rounded-xl font-medium transition-all hover:opacity-90 text-shadow-md"
        >
          <ArrowLeft size={20} />
          Voltar para o site
        </button>
      </div>
    </section>
  );
};

export default Thanks;
