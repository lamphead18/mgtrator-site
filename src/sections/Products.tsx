import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import ProductCard from "../components/ProductCard";

type Product = {
  id: string;
  title: string;
  image: string;
  whatsapp: string;
  mercadoLivre: string;
};

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 3;

  useEffect(() => {
    const fetchProducts = async () => {
      console.log(db);
      const querySnapshot = await getDocs(collection(db, "produtos"));
      console.log(querySnapshot);
      const produtosList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Product[];
      setProducts(produtosList);
    };
    fetchProducts();
  }, []);

  const totalPages = Math.ceil(products.length / perPage);
  const paginated = products.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  return (
    <section id="produtos" className="py-16 px-6 bg-white text-black">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-[#213a77]">
          Nossos Produtos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {paginated.map((prod) => (
            <ProductCard key={prod.id} {...prod} />
          ))}
        </div>

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
      </div>
    </section>
  );
};

export default Products;
