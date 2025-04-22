import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo_mgtratorpecas_png_branco.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#213a77] text-white fixed top-0 left-0 w-full z-50 shadow">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center h-[96px]">
        <a href="#" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Logo MG Trator Peças"
            className="h-20 w-auto object-contain"
          />
          <span className="sr-only">MG Trator Peças</span>
        </a>

        <nav className="hidden md:flex space-x-6 text-sm font-semibold tracking-wide">
          <a href="#" className="hover:underline underline-offset-4">
            Início
          </a>
          <a href="#produtos" className="hover:underline underline-offset-4">
            Produtos
          </a>
          <a href="#marcas" className="hover:underline underline-offset-4">
            Marcas
          </a>
          <a href="#contato" className="hover:underline underline-offset-4">
            Contato
          </a>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
          aria-label="Abrir menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div
        className={`md:hidden transition-all duration-300 overflow-hidden bg-[#213a77] ${
          menuOpen ? "max-h-96 py-4" : "max-h-0 py-0"
        }`}
      >
        <nav className="flex flex-col items-start px-6 space-y-3 text-sm font-medium">
          <a
            href="#"
            className="hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            Início
          </a>
          <a
            href="#produtos"
            className="hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            Produtos
          </a>
          <a
            href="#marcas"
            className="hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            Marcas
          </a>
          <a
            href="#contato"
            className="hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
