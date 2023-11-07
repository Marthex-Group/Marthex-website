import React from "react";
import { useEffect } from "react";
import aos from "aos";
// import aos css
import "aos/dist/aos.css";

// importing images
import ceo from '../assets/images/ceo.png'
import cto from "../assets/images/cto.png";
import coo from "../assets/images/coo.jpg";
import director from "../assets/images/Samuel.png";
import melvin from "../assets/images/melvin.png";

function Team() {
  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-6 dark:bg-gray-800 dark:text-gray-100" id="team">
      <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
        <h1 className="text-4xl font-bold leadi text-center sm:text-5xl">
          Our team
        </h1>
        <p className="max-w-2xl text-center dark:text-gray-400">
          Meet Our Exceptional Team: A Fusion of Brilliance and Innovation! Our
          talented ensemble comprises visionary software engineers, creative web
          developers, and strategic business development professionals.
          Together, we drive innovation, craft immersive digital experiences,
          and pave the way for groundbreaking solutions. Discover the power of
          collaboration, creativity, and expertise – all under one roof at
          Martex
        </p>
        <div className="flex flex-row flex-wrap justify-center">
          <div
            className="flex flex-col justify-center m-8 text-center"
            data-aos="zoom-out-down"
          >
            <img
              alt=""
              className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
              src={ceo}
            />
            <p className="text-xl font-semibold leadi">Emmanuel Weh</p>
            <p className="dark:text-gray-400">CEO</p>
          </div>
          <div
            className="flex flex-col justify-center m-8 text-center"
            data-aos="zoom-out-down"
          >
            <img
              alt=""
              className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
              src={coo}
            />
            <p className="text-xl font-semibold leadi">Henry Bainda</p>
            <p className="dark:text-gray-400">COO</p>
          </div>
          <div
            className="flex flex-col justify-center m-8 text-center"
            data-aos="zoom-out-down"
          >
            <img
              alt=""
              className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
              src={cto}
            />
            <p className="text-xl font-semibold leadi">Alexander Kpainay</p>
            <p className="dark:text-gray-400">CTO</p>
          </div>
          <div
            className="flex flex-col justify-center m-8 text-center"
            data-aos="zoom-out-down"
          >
            <img
              alt=""
              className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
              src={director}
            />
            <p className="text-xl font-semibold leadi">Samuel Moore</p>
            <p className="dark:text-gray-400">Apprenticeship Director</p>
          </div>
          <div
            className="flex flex-col justify-center m-8 text-center"
            data-aos="zoom-out-down"
          >
            <img
              alt=""
              className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
              src={melvin}
            />
            <p className="text-xl font-semibold leadi">Melvin Dennis</p>
            <p className="dark:text-gray-400">Web Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
