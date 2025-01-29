import Hero from "@/components/home/Hero";
import Searchbar from "@/components/common/Searchbar";
import DetailedSearchbar from "@/components/common/DetailedSearchbar";
import TrendingHotels from "@/components/sections/TrendingHotels";

//Components
import ExperienceCard from "@/components/ExperiencesCard";
import HotelCard from "@/components/HotelCard";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="relative">
        <Hero />
        {/* Main Searchbar */}
        <div className="absolute left-0 right-0 bottom-0 transform translate-y-1/2 px-4">
          <div className="container mx-auto">
            <Searchbar />
          </div>
        </div>
      </div>
      {/* Detailed Searchbar Section */}
      <div className="container mx-auto px-4 mt-40">
        <DetailedSearchbar />
      </div>
      {/* Add padding to prevent content overlap */}
      <div className="mt-32">
        <TrendingHotels />
        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-50 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">No Booking Fees</h3>
                <p className="text-gray-600">
                  Save more on every stay by avoiding extra fees.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Direct Connections</h3>
                <p className="text-gray-600">
                  Book directly with hotels for the best experience.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Hassle-Free Stays</h3>
                <p className="text-gray-600">
                  Enjoy a seamless process from start to finish.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="py-16 bg-blue-600 text-white text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold">Ready to Book Your Stay?</h2>
            <p className="text-lg">
              Get started today and find the perfect hotel without middlemen.
            </p>
            <button className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg shadow-md hover:bg-gray-100">
              Start Now
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 bg-gray-800 text-white">
          <div className="max-w-7xl mx-auto text-center">
            <p>&copy; 2025 Your Company Name. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default Home;
