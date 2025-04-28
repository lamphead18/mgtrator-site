import { useEffect, useState } from "react";
import { getShowcase } from "../services/firebase";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
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
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const perPage = 3;

  useEffect(() => {
    const fetchData = async () => {
      const showcase = await getShowcase();
      setProducts(showcase);
    };
    fetchData();
  }, []);

  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.id.includes(searchTerm)
  );

  const totalPages = Math.ceil(filteredProducts.length / perPage);
  const paginated = filteredProducts.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

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

        <SearchBar
          onSearch={(term) => {
            setSearchTerm(term);
            setCurrentPage(1);
          }}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {paginated.length > 0 ? (
            paginated.map((produto) => (
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

        {totalPages > 1 && (
          <div className="mt-8 flex justify-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 rounded font-medium transition ${
                  currentPage === i + 1
                    ? "bg-[#213a77] text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </motion.div>
    </motion.section>
  );
};

export default Products;
