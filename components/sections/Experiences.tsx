"use client";

import ExperienceGrid from "../home/ExperienceGrid";

const experiences = [
  {
    imageUrl: "/images/experiences/culture.jpg",
    title: "Culture"
  },
  {
    imageUrl: "/images/experiences/hotels.jpg",
    title: "Hotels"
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
        <h2 className="text-4xl font-bold mb-8 text-center">
          DISCOVER DENMARK
        </h2>
        <div className="mx-20">
          <ExperienceGrid experiences={experiences} />
        </div>
      </div>
    </section>
  );
};

export default Experiences; 