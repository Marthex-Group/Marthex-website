import React from 'react'
import homeHeroImage from "../assets/images/homeHero1.png"

function HomeHero() {
  return (
    <section className="bg-orange text-dark">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-4xl font-bold sm:text-3xl">
            Launch Your Career with Expert Apprenticeships!
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            Unlock Your Tech Career with Expert Guidance! 🚀 Join Our
            Apprenticeships Program. Dive into Hands-On Learning, Master Your
            Skills, and Build Future-Ready Software Solutions!
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              rel="noopener noreferrer"
              href="https://docs.google.com/forms/d/e/1FAIpQLSeS8kKJZYyGzSCgCHgQJr9L6qsnMCXJIrQlzKu3cym24h_AQg/viewform?usp=sf_link"
              className="px-8 py-3 text-lg font-semibold rounded bg-orange-500 text-white"
            >
              Apply Now
            </a>
            <a
              rel="noopener noreferrer"
              href="#services"
              className="px-8 py-3 text-lg text-orange-600 font-semibold border rounded dark:border-gray-100"
            >
              See our programs
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={homeHeroImage}
            alt="hero animation of a team working"
            className=" homeHeroImage xl:h-112 2xl:h-128"
          />
        </div>
      </div>
    </section>
  );
}

export default HomeHero
