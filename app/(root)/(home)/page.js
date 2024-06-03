import AdBanner from "@/components/AdBanner";
import SliderContainer from "@/components/SliderContainer";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <main className="flex flex-col">
      <Navbar />
      <AdBanner />
      <SliderContainer head_txt="New Products" />
      <Footer />
    </main>
  );
};

export default Home;
