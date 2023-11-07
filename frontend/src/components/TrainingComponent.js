import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import apprenticeshipImage from "../assets/images/training.jpg";

function ApprenticeshipComponent() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-white">
      <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        <div className="w-full lg:w-1/2" data-aos="flip-down">
          <div className="lg:max-w-lg">
            <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-black lg:text-4xl">
              Transform Your Future with Martex Academy's Apprenticeship Program
            </h1>

            <div className="mt-8 space-y-5">
              <p className="text-black">
                We firmly believe in equal opportunities for highly motivated
                individuals seeking to enhance their skills and create a better
                future. Martex Academy offers a comprehensive apprenticeship
                program that provides hands-on training in software development,
                digital marketing, graphic design, and more.
              </p>
            </div>

            {/* <div className="w-full mt-8 bg-transparent border rounded-md lg:max-w-sm dark:border-gray-700 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-400 focus-within:ring-opacity-40">
              <form className="flex flex-col lg:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 h-10 px-4 py-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
                />

                <button
                  type="button"
                  className="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400"
                >
                  Join Us
                </button>
              </form>
            </div> */}
          </div>
        </div>

        <div
          className="flex items-center justify-center w-full h-96 lg:w-1/2"
          data-aos="flip-up"
        >
          <img
            alt="Apprenticeship Program Presentation"
            className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl"
            src={apprenticeshipImage}
          />
        </div>
      </div>
    </section>
  );
}

export default ApprenticeshipComponent;
