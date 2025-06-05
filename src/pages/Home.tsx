import Header from "../components/Header";
import Footer from "../components/Footer";
import ImageCarousel from "../components/ImageCarousel";
import Hero from "../sections/Hero";
import Products from "../sections/Products";
import Brands from "../sections/Brands";
import Locations from "../sections/Locations";
import Contact from "../sections/Contact";

const Home = () => {
  return (
    <div className="bg-white text-gray-900">
      <Header />
      <div className="h-[96px] md:h-[96px]" />
      <main>
        <ImageCarousel />
        <Hero />
        <Products />
        <Brands />
        <Locations />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;