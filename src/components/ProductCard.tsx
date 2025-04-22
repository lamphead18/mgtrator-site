import { MessageCircle } from "lucide-react";

type ProductCardProps = {
  name: string;
  image: string;
};

const ProductCard = ({ name, image }: ProductCardProps) => {
  return (
    <div className="bg-white border rounded-xl shadow-md overflow-hidden">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-[#213a77] mb-3">{name}</h3>
        <div className="flex justify-center gap-3">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#fcb900] text-black px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition"
          >
            Mercado Livre
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
