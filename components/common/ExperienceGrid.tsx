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
    <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center">
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