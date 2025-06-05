import { motion } from "framer-motion";
import fachadaSLZ from "../assets/fachadaSLZ.jpeg";

const storeLocations = [
  {
    id: "sao-luis",
    name: "São Luís - MA",
    address: "Av. Guajajaras, 402 - Tirirical, São Luís - MA",
    image: fachadaSLZ,
    hasImage: true,
  },
  {
    id: "palmas",
    name: "Palmas - TO",
    address: "Q ARSE 82 AVENIDA NS 10 Nº 806, Plano Diretor Sul, Palmas - TO",
    hasImage: false,
  },
];

const Locations = () => {
  return (
    <motion.section
      id="localizacao"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-16 px-6 bg-[#f5f5f5] text-black"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-[#213a77] text-center text-shadow-md">
          Nossas Lojas
        </h2>
        <p className="text-center mb-8">
          Visite uma de nossas lojas físicas e conheça nossos produtos de perto.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {storeLocations.map((location) => (
            <div
              key={location.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              {location.hasImage ? (
                <div
                  className="overflow-hidden bg-[#213a77] flex items-center justify-center"
                  style={{ height: "300px" }}
                >
                  <img
                    src={location.image}
                    alt={`Fachada ${location.name}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              ) : (
                <div
                  className="overflow-hidden bg-gray-100 flex items-center justify-center"
                  style={{ height: "300px" }}
                >
                  <div className="text-center p-4">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-500 font-medium">{location.name}</p>
                  </div>
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#213a77] mb-2">
                  {location.name}
                </h3>
                <p className="text-gray-600 mb-4">{location.address}</p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    location.address
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#213a77] font-medium hover:underline"
                >
                  Ver no Google Maps
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Locations;
