import ProductCard from "../components/ProductCard";

const Products = () => {
  const produtos = [
    {
      name: "Bomba Hidráulica Volvo",
      image: "https://via.placeholder.com/300x200?text=Produto+1",
    },
    {
      name: "Motor Perkins 1104D",
      image: "https://via.placeholder.com/300x200?text=Produto+2",
    },
    {
      name: "Kit Turbo Komatsu",
      image: "https://via.placeholder.com/300x200?text=Produto+3",
    },
  ];

  return (
    <section id="produtos" className="py-16 px-6 bg-white text-black">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-[#213a77]">
          Nossos Produtos
        </h2>
        <p className="mb-10 text-gray-700">
          Peças para linha pesada de várias marcas.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {produtos.map((produto, index) => (
            <ProductCard
              key={index}
              name={produto.name}
              image={produto.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
