import { testimonials } from "@/public/data";
import React from "react";
function Testimonials() {
  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:px-6">
        <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
          Testimonials
        </h1>
        <p className="font-normal text-gray-500 text-xs md:text-base mb-20">
          Below some project I worked
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className=" rounded-lg shadow flex flex-col md:flex-row bg-gray-50 dark:border-gray-700"
            >
              <div className="w-full md:w-1/3">
                <img
                  className="w-full h-auto rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src={testimonial.avatar}
                  alt={testimonial.name}
                />
              </div>
              <div className="p-5 flex-1">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 ">
                  <a href="#"> {testimonial.name}</a>
                </h3>
                <span>{testimonial.role}</span>
                <p className="mt-3 mb-4 font-light">
                  {testimonial.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
