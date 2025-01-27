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
            Linking You to the correct inn.
          </h1>
          <p className="text-lg md:text-xl ">No booking fees, No middleman.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
