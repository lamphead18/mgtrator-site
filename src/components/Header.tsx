import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo_mgtratorpecas_png_branco.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavClick = (sectionId: string) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
    } else {
      scrollToSection(sectionId);
    }
    setMenuOpen(false);
  };

  return (
    <header className="bg-[#213a77] text-white fixed top-0 left-0 w-full z-50 shadow">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center h-[96px]">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Logo MG Trator Peças"
            className="h-20 w-auto object-contain "
          />
          <span className="sr-only">MG Trator Peças</span>
        </Link>

        <nav className="hidden md:flex space-x-6 text-sm font-semibold tracking-wide">
          <button
            onClick={() => handleNavClick("topo")}
            className="hover:underline underline-offset-4"
          >
            Início
          </button>
          <button
            onClick={() => handleNavClick("produtos")}
            className="hover:underline underline-offset-4"
          >
            Produtos
          </button>
          <button
            onClick={() => handleNavClick("marcas")}
            className="hover:underline underline-offset-4"
          >
            Marcas
          </button>
          <button
            onClick={() => handleNavClick("localizacao")}
            className="hover:underline underline-offset-4"
          >
            Lojas
          </button>
          <button
            onClick={() => handleNavClick("contato")}
            className="hover:underline underline-offset-4"
          >
            Contato
          </button>
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
          <button
            onClick={() => handleNavClick("topo")}
            className="hover:underline"
          >
            Início
          </button>
          <button
            onClick={() => handleNavClick("produtos")}
            className="hover:underline"
          >
            Produtos
          </button>
          <button
            onClick={() => handleNavClick("marcas")}
            className="hover:underline"
          >
            Marcas
          </button>
          <button
            onClick={() => handleNavClick("localizacao")}
            className="hover:underline"
          >
            Lojas
          </button>
          <button
            onClick={() => handleNavClick("contato")}
            className="hover:underline"
          >
            Contato
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
