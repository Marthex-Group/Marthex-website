import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobile,
  faBullhorn,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";

function ServicesComponent() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="services"
      className="m-4 md:m-8 text-dark-100"
      data-aos="zoom-in-up"
    >
      <div className="container mx-auto p-4 my-6 space-y-2 text-center">
        <h2 className="text-5xl font-bold">Empower Your Skills with Us</h2>
        <p className="dark:text-gray-400">
          Explore our apprenticeship programs and boost your career
        </p>
      </div>
      <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col items-center p-4  hover:drop-shadow-md transition duration-300 ease-in-out transform hover:scale-105">
          <FontAwesomeIcon
            icon={faMobile}
            className="w-8 h-8 text-orange-600 mb-2"
          />
          <h3 className="my-3 text-3xl font-semibold">Software Development</h3>
          <div className="space-y-1 leadi">
            Learn the art of software development and build innovative
            applications.
          </div>
        </div>
        <div className="flex flex-col items-center p-4 hover:drop-shadow-md transition duration-300 ease-in-out transform hover:scale-105">
          <FontAwesomeIcon
            icon={faBullhorn}
            className="w-8 h-8 text-orange-600 mb-2"
          />
          <h3 className="my-3 text-3xl font-semibold">Digital Marketing</h3>
          <div className="space-y-1 leadi">
            Master the strategies of digital marketing and enhance brand
            presence online.
          </div>
        </div>
        <div className="flex flex-col items-center p-4 hover:drop-shadow-md transition duration-300 ease-in-out transform hover:scale-105">
          <FontAwesomeIcon
            icon={faPalette}
            className="w-8 h-8 text-orange-600 mb-2"
          />
          <h3 className="my-3 text-3xl font-semibold">Graphics Design</h3>
          <div className="space-y-1 leadi">
            Unleash your creativity in graphic design and create visually
            stunning artworks.
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeS8kKJZYyGzSCgCHgQJr9L6qsnMCXJIrQlzKu3cym24h_AQg/viewform?usp=sf_link"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105"
        >
          Join Our Program
        </a>
      </div>
    </section>
  );
}

export default ServicesComponent;
