"use client";

import Image from 'next/image';
import { MissionProps } from '@/types';

const Mission = ({ 
  title = "Our Mission", 
  description = "Our mission is to make hotel booking more transparent. We connect you directly with hotels, ensuring you get their own prices, better service, and more flexible terms. No middlemen. No hidden fees. Just a smarter way to book hotels in Denmark.",
  imageUrl = "/images/mission.jpg" 
}: MissionProps) => {
  return (
    <section className="py-16 px-8 md:py-28 bg-site-background">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center mb-6">
          <div className="h-[1px] bg-gray-300 w-8 mr-4"></div>
          <h2 className="text-3xl md:text-4xl font-thin">
            {title}
          </h2>
          <div className="h-[1px] bg-gray-300 w-8 ml-4"></div>
        </div>
        
        <p className="text-base font-light md:text-lg text-center max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
};

export default Mission; 