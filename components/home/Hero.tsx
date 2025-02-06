"use client";

import React, { FC } from "react";
import Image from "next/image";

const Hero: FC = () => {
  return (
    <div>
      <section className="relative h-[45vh]">
        <div className="absolute inset-0">
          <Image
            src="/images/hotel-7.jpg"
            alt="Hero background"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center">
          <div className="text-center text-white absolute top-1/2 -translate-y-1/2 w-full">
            <div className="absolute -top-36 left-1/2 -translate-x-1/2">
              <Image
                src="/images/LogoWhite.png"
                alt="Linnker Logo"
                width={220}
                height={80}
                className="mx-auto"
              />
            </div>
            <div className="space-y-4 py-10">
              <h1 className="text-4xl md:text-6xl translate-y-10 font-black text-white drop-shadow-xl">
                Linking you to the correct inn.
              </h1>
              <p className="text-lg md:text-xl translate-y-8 font-black text-yellow-500">No middleman, no hidden fees.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
