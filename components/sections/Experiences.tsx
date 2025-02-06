"use client";

import ExperienceGrid from "../common/ExperienceGrid";

const experiences = [
  {
    imageUrl: "/images/experiences/culture.jpg",
    title: "Culture"
  },
  {
    imageUrl: "/images/experiences/nature.jpg",
    title: "Nature"
  },
  {
    imageUrl: "/images/experiences/food.jpg",
    title: "Food"
  }
];

const Experiences = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-thin mb-8 text-center">
          DISCOVER DENMARK'S BEST EXPERIENCES
        </h2>
        <div className="mx-20">
          <ExperienceGrid experiences={experiences} />
        </div>
      </div>
    </section>
  );
};

export default Experiences; 