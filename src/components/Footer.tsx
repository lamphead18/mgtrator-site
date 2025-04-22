import { Mail, Phone, MapPin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#213a77] text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
        <div className="flex flex-col gap-2">
          <h4 className="font-bold text-white mb-2">Contato</h4>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>comercial@mgtratorpecas.com.br</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>+55 (85) 98186-6717</span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="font-bold text-white mb-2">Redes Sociais</h4>
          <div className="flex items-center gap-2">
            <Instagram className="w-4 h-4" />
            <a href="#" target="_blank" className="hover:underline">
              Instagram
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="font-bold text-white mb-2">Loja física</h4>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Av. Guajajaras, 402 - Tirirical</span>
          </div>
        </div>
      </div>

      <p className="text-center mt-6 text-xs text-gray-200">
        © {new Date().getFullYear()} MG Trator Peças. Todos os direitos
        reservados.
      </p>
    </footer>
  );
};

export default Footer;
