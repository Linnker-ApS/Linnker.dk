"use client";

import ExperienceCard from "./ExperienceCard";
import { memo, useState } from 'react';

interface Experience {
  imageUrl: string;
  title: string;
}

interface ExperienceGridProps {
  experiences: Experience[];
}

const ExperienceGrid = ({ experiences }: ExperienceGridProps) => {
  return (
    <div className="grid 
      grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 
      gap-4 
      justify-items-center 
      max-w-full 
      mx-auto 
      px-4
    ">
      {experiences.map((experience, index) => (
        <ExperienceCard
          key={index}
          {...experience}
        />
      ))}
    </div>
  );
};

interface ExperiencesProps {
  initialExperiences?: Experience[];
}

// Using memo to prevent unnecessary re-renders
const Experiences = memo(({ initialExperiences = [] }: ExperiencesProps) => {
  const [experiences] = useState<Experience[]>(initialExperiences.length > 0 
    ? initialExperiences 
    : [
        { imageUrl: '/images/experiences/food.jpg', title: 'Food' },
        { imageUrl: '/images/experiences/culture.jpg', title: 'Culture' },
        { imageUrl: '/images/experiences/nature.jpg', title: 'Hotels' }
      
      ]
  );
  
  return (
    <section className="py-12 bg-site-background">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Explore Danish Experiences
        </h2>
        <ExperienceGrid experiences={experiences} />
      </div>
    </section>
  );
});

// Important: Set display name for debugging
Experiences.displayName = 'Experiences';

export default Experiences; 