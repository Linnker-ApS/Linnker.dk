"use client";

import Image from "next/image";

interface ExperienceCardProps {
  imageUrl: string;
  title: string;
}

const ExperienceCard = ({ imageUrl, title }: ExperienceCardProps) => {
  return (
    <div className="relative h-[300px] w-[400px] cursor-pointer group overflow-hidden 
      md:h-[250px] md:w-[300px]  // Smaller on medium screens
      sm:h-[200px] sm:w-[250px]  // Even smaller on small screens
      max-w-full"  // Ensures responsiveness
    >
      <Image
        src={imageUrl}
        alt={title}
        sizes="auto"
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
        <h3 className="text-6xl md:text-4xl sm:text-2xl font-medium text-white uppercase absolute bottom-6 text-center w-full">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default ExperienceCard; 