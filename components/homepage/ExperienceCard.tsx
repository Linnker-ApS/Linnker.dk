"use client";

import Image from "next/image";

interface ExperienceCardProps {
  imageUrl: string;
  title: string;
}

const ExperienceCard = ({ imageUrl, title }: ExperienceCardProps) => {
  const handleClick = () => {
    // Create the Google search URL with the title and "in Denmark"
    const searchQuery = encodeURIComponent(`${title} in Denmark`);
    const googleSearchUrl = `https://www.google.com/search?q=${searchQuery}`;
    
    // Open in a new tab
    window.open(googleSearchUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      className="relative h-[300px] w-[334px] cursor-pointer group overflow-hidden 
        lg:h-[300px] lg:w-[334px] 
        md:h-[250px] md:w-[300px] 
        sm:h-[200px] sm:w-[250px] 
        max-w-full" 
      onClick={handleClick}
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