"use client";

import React, { FC } from "react";
import Image from "next/image";

const Hero: FC = () => {
  return (
    <div>
      <section className="relative h-[50vh]">
        <div className="absolute inset-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="absolute w-full h-full object-cover"
          >
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center">
          <div className="text-center text-white absolute top-1/2 -translate-y-1/2 w-full">
            <div className="absolute -top-36 left-1/2 -translate-x-1/2">
              <Image
                src="/images/LogoWhite.png"
                alt="Linnker Logo"
                width={270}
                height={100}
                className="mx-auto"
              />
            </div>
            <div className="space-y-4 py-10">
              <h1 className="text-5xl md:text-7xl translate-y-10 font-bold text-white drop-shadow-xl">
              Direct Booking. Real benefits.
              </h1>
              <p className="text-lg md:text-xl translate-y-8 font-bold text-yellow-500">Direct prices, better service, flexible terms.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
