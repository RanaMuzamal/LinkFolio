import { experiences } from "@/public/data";
import React from "react";

function Experience() {
  return (
    <section className="py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
          Experience
        </h1>
        <p className="font-normal text-gray-500 text-xs md:text-base mb-20">
          Explore my professional journey and expertise in the following areas.
        </p>
        {experiences.map((experience, index) => (
          <div key={index} className="bg-gray-50 px-8 py-10 rounded-md">
            <h4 className="font-bold text-gray-700 text-lg mb-4">
              {experience.role} at {experience.company}
            </h4>
            <p className="font-normal text-gray-500 text-md mb-4">
              {experience.date}, {experience.location}
            </p>
            <ul className="list-disc list-inside">
              {experience.description.map((desc, idx) => (
                <li key={idx} className="mb-2 text-sm md:text-lg">
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
