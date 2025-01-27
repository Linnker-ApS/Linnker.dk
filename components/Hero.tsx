import React from "react";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen"
      style={{
        backgroundImage: "url('/images/heroimage.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white space-y-6 px-4">
          <h1 className="text-4xl md:text-6xl font-bold">
            Linking You to Hassle-Free Hotel Stays
          </h1>
          <p className="text-lg md:text-xl">
            Find your perfect stay with no booking fees or middlemen.
          </p>
          <div>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
              Explore Hotels
            </button>
            <button className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow-md hover:bg-gray-300 ml-4">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
