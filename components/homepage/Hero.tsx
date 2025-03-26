"use client";

import React, { FC } from "react";
import Logo from "@/components/common/Logo";

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
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Logo 
                variant="whiteYellow"
                size="2xl"
              />
            </div>
            <div className="space-y-4 py-10">
              <h1 className="
              px-4
                font-bold text-white drop-shadow-xl translate-y-10
                text-4xl
                lg:text-6xl
                xl:text-7xl
                2xl:text-8xl
                "
              >
                Direct Booking. Real benefits.
              </h1>
              <p className="
                font-bold text-yellow-500 translate-y-8
                text-sm
                xs:text-base
                sm:text-lg
                md:text-xl
                lg:text-2xl"
              >
                Direct prices, better service, flexible terms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
