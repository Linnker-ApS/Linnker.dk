import Hero from "@/components/home/Hero";
import Searchbar from "@/components/common/Searchbar";
import TrendingHotels from "@/components/sections/TrendingHotels";
import Experiences from "@/components/sections/Experiences";
import Mission from "@/components/sections/Mission";
import Footer from "@/components/common/Footer";

//Components

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="relative">
        <Hero />
        <div className="absolute left-0 right-0 bottom-0 transform translate-y-1/2 px-4">
          <div className="container mx-auto">
            <Searchbar />
          </div>
        </div>
      </div>
      <div className="mt-20">
        <TrendingHotels />
        <Experiences />
        <Mission />
      </div>
      <Footer />
    </main>
  );
};

export default Home;
