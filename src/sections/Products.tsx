import { useEffect, useState, useMemo } from "react";
import { getShowcase } from "../services/firebase";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import Loader from "../components/Loader";
import { motion } from "framer-motion";

type Product = {
  id: string;
  title: string;
  imageUrl: string;
  whatsapp?: string;
  mercadoLivre?: string;
};

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 3;

  useEffect(() => {
    const fetchData = async () => {
      const showcase = await getShowcase();
      setProducts(showcase);
    };
    fetchData();
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter(
      (product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.id.includes(searchTerm)
    );
  }, [products, searchTerm]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const totalPages = Math.ceil(filteredProducts.length / perPage);

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({
      top: document.getElementById("produtos")?.offsetTop || 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.section
      id="produtos"
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
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-8 text-[#213a77]">
          Nossos Produtos
        </h2>

        <SearchBar onSearch={(term) => setSearchTerm(term)} />

        {products.length === 0 ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {paginatedProducts.length > 0 ? (
              paginatedProducts.map((produto) => (
                <ProductCard
                  key={produto.id}
                  id={produto.id}
                  title={produto.title}
                  image={produto.imageUrl}
                  whatsapp={produto.whatsapp || "https://wa.me/5585981866717"}
                  mercadoLivre={produto.mercadoLivre || "#"}
                />
              ))
            ) : (
              <p className="col-span-full text-gray-500">
                Nenhum produto encontrado.
              </p>
            )}
          </div>
        )}

        {totalPages > 1 && (
          <div className="mt-8 flex justify-center items-center gap-6">
            <button
              onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
              disabled={currentPage === 1}
              className={`px-5 py-2 rounded-xl font-semibold text-sm transition-all duration-300 ${
                currentPage === 1
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-[#213a77] text-white hover:bg-[#1b2f5c] hover:scale-105"
              }`}
            >
              ← Anterior
            </button>

            <span className="text-gray-600 font-medium text-sm">
              Página {currentPage} de {totalPages}
            </span>

            <button
              onClick={() =>
                handlePageChange(Math.min(currentPage + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className={`px-5 py-2 rounded-xl font-semibold text-sm transition-all duration-300 ${
                currentPage === totalPages
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-[#213a77] text-white hover:bg-[#1b2f5c] hover:scale-105"
              }`}
            >
              Próximo →
            </button>
          </div>
        )}
      </motion.div>
    </motion.section>
  );
};

export default Products;
