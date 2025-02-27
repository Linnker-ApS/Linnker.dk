"use client";

import { useEffect, useRef, useState } from "react";

//Components
import Hero from "@/components/homepage/Hero";
import Searchbar from "@/components/common/Searchbar";
import TrendingHotels from "@/components/homepage/sections/TrendingHotels";
import MainHeader from "@/components/common/MainHeader";
import Experiences from "@/components/homepage/sections/Experiences";
import Mission from "@/components/homepage/sections/Mission";
import Footer from "@/components/common/Footer";


const Home = () => {
  const [isSticky, setIsSticky] = useState(false);
  const placeholderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      { threshold: 1 }
    );

    if (placeholderRef.current) {
      observer.observe(placeholderRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <main className="flex min-h-screen flex-col">
      <div className="relative">
        <Hero />
        {/* Placeholder div for intersection observer */}
        <div ref={placeholderRef} className="absolute left-0 right-0 bottom-0 h-1" />
        
        {/* Original search bar position */}
        <div className={`absolute left-0 right-0 bottom-0 transform translate-y-1/2 px-4 
          ${isSticky ? 'invisible' : 'visible'}`}>
          <div className="container mx-auto">
            <Searchbar showInitialSuggestions={true} />
          </div>
        </div>

        {/* Sticky search bar */}
        <div 
          className={`fixed top-0 left-0 right-0 transition-transform duration-300 z-50
            ${isSticky ? 'translate-y-0' : '-translate-y-full'}`}
        >
          <MainHeader isSticky={true} />
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
