import { Mail, Phone, MapPin, Instagram } from "lucide-react";
import logo from "../assets/logo_mgtratorpecas_png_branco.png";

const Footer = () => {
  return (
    <footer className="bg-[#213a77] text-white px-6 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left items-start">
        <div className="flex justify-center md:justify-start">
          <img
            src={logo}
            alt="Logo MG Trator Peças"
            className="h-20 object-contain mx-auto md:mx-0"
          />
        </div>

        <div>
          <h4 className="font-bold mb-3 uppercase text-sm">Contatos</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:comercial@mgtratorpecas.com.br">
                comercial@mgtratorpecas.com.br
              </a>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Phone className="w-4 h-4" />
              <a href="63999828455">+55 (63) 9 9982-8455</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-3 uppercase text-sm">Redes Sociais</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Instagram className="w-4 h-4" />
              <a href="#" target="_blank">
                Instagram
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-3 uppercase text-sm">Loja Física</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <MapPin className="w-4 h-4" />
              <span>Av. Guajajaras, 402 - Tirirical</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-400/30 pt-4 text-center text-xs text-gray-200">
        © {new Date().getFullYear()} MGTratorPeças™. Todos os direitos
        reservados.
      </div>
    </footer>
  );
};

export default Footer;
