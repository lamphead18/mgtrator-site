type ProductCardProps = {
  id: string;
  title: string;
  image: string;
  whatsapp: string;
  mercadoLivre: string;
};

const ProductCard = ({
  id,
  title,
  image,
  whatsapp,
  mercadoLivre,
}: ProductCardProps) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-1 transition-transform duration-300 bg-white flex flex-col">
      <div className="relative w-full h-48 overflow-hidden bg-white">
        <img
          src={image}
          alt={`Peça código ${id} - ${title}`}
          className="absolute inset-0 w-full h-full object-contain blur-sm transition-all duration-700 ease-out"
          loading="lazy"
          onLoad={(e) => {
            e.currentTarget.classList.remove("blur-sm");
          }}
        />
      </div>

      <div className="p-4 flex flex-col justify-between flex-grow">
        <h3 className="text-lg font-semibold text-[#213a77] mb-1">{title}</h3>
        <p className="text-xs text-gray-500 mb-2 italic">Código: {id}</p>

        <div className="flex gap-2 mt-auto">
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-[#25D366] hover:bg-green-500 text-white font-semibold py-2 rounded text-sm transition-all duration-300 transform hover:scale-105 hover:opacity-90"
          >
            WhatsApp
          </a>
          <a
            href={mercadoLivre}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-[#fcb900] hover:bg-yellow-400 text-black font-semibold py-2 rounded text-sm transition-all duration-300 transform hover:scale-105 hover:opacity-90"
          >
            Mercado Livre
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
