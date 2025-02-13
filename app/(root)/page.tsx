"use client";

import { useEffect, useRef, useState } from "react";
import Hero from "@/components/home/Hero";
import Searchbar from "@/components/common/Searchbar";
import TrendingHotels from "@/components/sections/TrendingHotels";
import Experiences from "@/components/sections/Experiences";
import Mission from "@/components/sections/Mission";
import Footer from "@/components/common/Footer";

//Components

const Home = () => {
  const [isSticky, setIsSticky] = useState(false);
  const searchBarRef = useRef<HTMLDivElement>(null);
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
            <Searchbar />
          </div>
        </div>

        {/* Sticky search bar */}
        <div 
          className={`fixed top-0 left-0 right-0 bg-white shadow-md transition-transform duration-300 z-50
            ${isSticky ? 'translate-y-0' : '-translate-y-full'}`}
        >
          <div className="container mx-auto px-4 py-4">
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
