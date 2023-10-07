import { portfolio } from "@/public/data";
import React from "react";

function Portfolio() {
  return (
    <section className="py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
          Portfolio
        </h1>
        <p className="font-normal text-gray-500 text-xs md:text-base mb-20">
          Below some project I worked :)
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolio.map((project, index) => (
            <div key={index} className="bg-gray-50 px-8 py-10 rounded-md">
              <h4 className="font-bold text-gray-700 text-lg mb-4">
                {project.title}
              </h4>
              <p className="font-normal text-gray-500 text-md mb-4">
                {project.description}
              </p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Learn More
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
