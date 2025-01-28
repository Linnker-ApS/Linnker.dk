"use client";

import React, { FC } from "react";
import Image from "next/image";
import Searchbar from "../Searchbar";

const Hero: FC = () => {
  return (
    <div>
      <section className="relative h-[35vh]">
        <div className="absolute inset-0">
          <Image
            src="/images/158188.jpg"
            alt="Hero background"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white space-y-6 px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Linking You to the correct inn.
            </h1>
            <p className="text-lg md:text-xl">No booking fees, No middleman.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
