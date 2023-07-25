import About from "@/components/MainLayout/About";
import Document from "@/components/MainLayout/Document";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Map from "@/components/MainLayout/Map";
import Program from "@/components/MainLayout/Program/Program";
import Review from "@/components/MainLayout/Review";
import Search from "@/components/MainLayout/Search";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Search />
      <Document />
      <About />
      <Program />
      <Review />
      <Map />
      <Footer />
    </div>
  );
};

export default HomePage;
