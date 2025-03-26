"use client";

import ExperienceCard from "./ExperienceCard";

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
      grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 
      gap-12
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

export default ExperienceGrid;