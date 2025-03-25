"use client";

import { useEffect, useRef, useState, lazy, Suspense } from "react";
import { ErrorBoundary } from '@/components/ui/ErrorBoundary';

//Components
import Hero from "@/components/homepage/Hero";
import Searchbar from "@/components/common/Searchbar";
import PageSearchbar from "@/components/common/PageSearchbar";
import Footer from "@/components/common/Footer";

// Lazy load section components
const TrendingHotels = lazy(() => import("@/components/homepage/sections/TrendingHotels"));
const Experiences = lazy(() => import("@/components/homepage/sections/Experiences"));
const Mission = lazy(() => import("@/components/homepage/sections/Mission"));

// Loading spinner component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center py-12 bg-site-background">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FFB700]"></div>
  </div>
);

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
    <main className="flex min-h-screen flex-col bg-site-background">
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
          <PageSearchbar isSticky={true} />
        </div>
      </div>

      <div className="mt-20 bg-site-background">
        <ErrorBoundary fallback={<div className="p-8 text-center">Something went wrong loading trending hotels.</div>}>
          <Suspense fallback={<LoadingSpinner />}>
            <TrendingHotels />
          </Suspense>
        </ErrorBoundary>
        
        <ErrorBoundary fallback={<div className="p-8 text-center">Something went wrong loading experiences.</div>}>
          <Suspense fallback={<LoadingSpinner />}>
            <Experiences />
          </Suspense>
        </ErrorBoundary>
        
        <ErrorBoundary fallback={<div className="p-8 text-center">Something went wrong loading our mission.</div>}>
          <Suspense fallback={<LoadingSpinner />}>
            <Mission />
          </Suspense>
        </ErrorBoundary>
      </div>
      <Footer />
    </main>
  );
};

export default Home;
