import { useEffect, useState, useMemo } from "react";
import { getShowcase } from "../services/firebase";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import Loader from "../components/Loader";
import { motion } from "framer-motion";
import { Grid, List } from "lucide-react";

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
  const [showAll, setShowAll] = useState(false);
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

  const displayedProducts = showAll
    ? filteredProducts
    : filteredProducts.slice(
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

  const toggleViewMode = () => {
    setShowAll(!showAll);
    setCurrentPage(1);
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
        <h2 className="text-3xl font-bold mb-8 text-[#213a77] text-shadow-md">
          Nossos Produtos
        </h2>

        <div className="flex flex-col items-center gap-4 mb-8">
          <SearchBar onSearch={(term) => setSearchTerm(term)} />

          <button
            onClick={toggleViewMode}
            className="flex items-center gap-2 px-4 py-2 bg-[#213a77] text-white rounded-lg hover:bg-[#1b2f5c] transition-colors"
          >
            {showAll ? (
              <Grid className="w-4 h-4" />
            ) : (
              <List className="w-4 h-4" />
            )}
            {showAll ? "Visualização Paginada" : "Ver Todos"}
          </button>
        </div>

        {products.length === 0 ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {displayedProducts.length > 0 ? (
              displayedProducts.map((produto) => (
                <ProductCard
                  key={produto.id}
                  id={produto.id}
                  title={produto.title}
                  image={produto.imageUrl}
                  whatsapp={produto.whatsapp || "https://wa.me/63999828455"}
                  mercadoLivre={
                    produto.mercadoLivre ||
                    "https://lista.mercadolivre.com.br/_CustId_2350890064?item_id=MLB4022137373&category_id=MLB456620&seller_id=2350890064&client=recoview-selleritems&recos_listing=true#origin=vip&component=sellerData&typeSeller=classic"
                  }
                />
              ))
            ) : (
              <p className="col-span-full text-gray-500">
                Nenhum produto encontrado.
              </p>
            )}
          </div>
        )}

        {!showAll && totalPages > 1 && (
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

        {showAll && filteredProducts.length > 6 && (
          <div className="mt-8">
            <p className="text-gray-600 text-sm">
              Exibindo todos os {filteredProducts.length} produtos
            </p>
          </div>
        )}
      </motion.div>
    </motion.section>
  );
};

export default Products;
