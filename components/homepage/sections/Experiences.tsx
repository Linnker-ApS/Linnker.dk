"use client";

import ExperienceGrid from "../ExperienceGrid";
import { useState } from 'react';

interface Experience {
  imageUrl: string;
  title: string;
}

interface ExperiencesProps {
  initialExperiences?: Experience[];
}

const defaultExperiences = [
  { imageUrl: '/images/experiences/food.jpg', title: 'Food' },
  { imageUrl: '/images/experiences/culture.jpg', title: 'Culture' },
  { imageUrl: '/images/experiences/hotels.jpg', title: 'Hotels' }
];

const Experiences = ({ initialExperiences = [] }: ExperiencesProps) => {
  const [experiences] = useState<Experience[]>(
    initialExperiences.length > 0 ? initialExperiences : defaultExperiences
  );
  
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Explore Danish Experiences
        </h2>
        <ExperienceGrid experiences={experiences} />
      </div>
    </section>
  );
};

export default Experiences; 