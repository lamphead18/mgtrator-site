import Footer from "./components/Footer";
import Header from "./components/Header";
import ImageCarousel from "./components/ImageCarousel";
import Brands from "./sections/Brands";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Products from "./sections/Products";

function App() {
  return (
    <div className="bg-white text-gray-900">
      <Header />
      <div className="h-[96px] md:h-[96px]" />
      <main>
        <ImageCarousel />
        <Hero />
        <Products />
        <Brands />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
