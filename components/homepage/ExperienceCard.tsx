"use client";

import Image from "next/image";

interface ExperienceCardProps {
  imageUrl: string;
  title: string;
}

const ExperienceCard = ({ imageUrl, title }: ExperienceCardProps) => {
  return (
    <div className="relative h-[300px] w-[400px] cursor-pointer group overflow-hidden">
      <Image
        src={imageUrl}
        alt={title}
        sizes="auto"
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-110"

      />
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
        <h3 className="text-6xl font-medium text-white uppercase absolute bottom-6 text-center w-full">{title}</h3>
      </div>
    </div>
  );
};

export default ExperienceCard; 