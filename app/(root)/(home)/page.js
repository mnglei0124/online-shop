import AdBanner from "@/components/AdBanner";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <main className="flex flex-col">
      <Navbar />
      <AdBanner />
      <Container />
      <Footer />
    </main>
  );
};

export default Home;
