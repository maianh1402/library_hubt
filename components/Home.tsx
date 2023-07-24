import About from "@/components/About";
import Document from "@/components/Document";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Map from "@/components/Map";
import Program from "@/components/Program";
import Review from "@/components/Review";
import Search from "@/components/Search";

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
