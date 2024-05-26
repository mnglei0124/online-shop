import AdBanner from "@/components/AdBanner";
import ProductContainer from "@/components/ProductContainer";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <main className="flex flex-col">
      <Navbar />
      <AdBanner />
      <ProductContainer />
      <Footer />
    </main>
  );
};

export default Home;
