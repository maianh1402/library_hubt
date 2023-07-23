import About from "@/components/About";
import Document from "@/components/Document";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Map from "@/components/Map";
import Program from "@/components/Program";
import Review from "@/components/Review";
import Search from "@/components/Search";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <Search />
      <About />
      <Document />
      <Review />
      <Program />
      <Map />
      <Footer />
    </div>
  );
}
