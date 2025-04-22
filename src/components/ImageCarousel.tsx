import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import banner1 from "../assets/cat1.jpeg";
import banner2 from "../assets/volvo2.jpg";
import banner3 from "../assets/volvo3.jpg";

const images = [banner1, banner2, banner3];

const ImageCarousel = () => {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
  });

  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const interval = 4000;

  useEffect(() => {
    const clear = () => {
      if (timeout.current) clearTimeout(timeout.current);
    };

    const next = () => {
      if (slider.current) slider.current.next();
    };

    const autoSlide = () => {
      clear();
      timeout.current = setTimeout(() => {
        next();
        autoSlide();
      }, interval);
    };

    if (slider.current) autoSlide();
    return () => clear();
  }, [slider]);

  return (
    <div className="relative w-full">
      <div
        ref={sliderRef}
        className="keen-slider aspect-[16/9] max-h-[400px] md:max-h-[600px] w-full"
      >
        {images.map((src, i) => (
          <div key={i} className="keen-slider__slide">
            <img
              src={src}
              alt={`Banner ${i + 1}`}
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <button
        onClick={() => slider.current?.prev()}
        className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-white text-[#213a77] p-2 rounded-full shadow-md hover:bg-[#f0f0f0] transition z-10"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={() => slider.current?.next()}
        className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-white text-[#213a77] p-2 rounded-full shadow-md hover:bg-[#f0f0f0] transition z-10"
        aria-label="Próximo slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default ImageCarousel;
