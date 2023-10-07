import { eduction } from "@/public/data";
import React from "react";

function Education() {
  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:px-6">
        <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
          Education
        </h1>
        <p className="font-normal text-gray-500 text-xs md:text-base mb-20">
          Here are the degrees I've earned and what I've learned from them :)
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          {eduction.map((education, index) => (
            <div
              key={index}
              className=" rounded-lg shadow flex flex-col md:flex-row bg-gray-50 dark:border-gray-700"
            >
              <div className="p-5 flex-1">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 ">
                  {education.degree}
                </h3>
                <span>{education.institute}</span>
                <p className="mt-3 mb-4 font-light">{education.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
