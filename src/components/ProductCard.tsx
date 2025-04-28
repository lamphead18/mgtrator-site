type ProductCardProps = {
  title: string;
  image: string;
  whatsapp: string;
  mercadoLivre: string;
};

const ProductCard = ({
  title,
  image,
  whatsapp,
  mercadoLivre,
}: ProductCardProps) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden border hover:shadow-xl transition">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-contain bg-white p-4"
        loading="lazy"
      />
      <div className="p-5 text-center">
        <h3 className="text-[#213a77] font-bold text-lg mb-4">{title}</h3>
        <div className="flex justify-center gap-3">
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white px-4 py-2 rounded-md text-sm font-semibold hover:brightness-110 transition"
          >
            WhatsApp
          </a>
          <a
            href={mercadoLivre}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#fcb900] text-black px-4 py-2 rounded-md text-sm font-semibold hover:brightness-110 transition"
          >
            Mercado Livre
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
