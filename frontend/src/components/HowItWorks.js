import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import apprenticeshipImage from "../assets/images/image3.png";

function HowItWorks() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-white">
      <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        <div className="w-full lg:w-1/2" data-aos="flip-down">
          <div className="lg:max-w-lg">
            <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-black lg:text-4xl">
              How It Works
            </h1>

            <div className="mt-8 space-y-5">
              <p className="text-black">
                Upon graduation from Martex and successful job placement,
                apprenticeship recipients will contribute 10% of their monthly
                income until the investment made in their education is repaid.
                This arrangement is negotiated with the HR department of the
                employing company, ensuring a fair and mutually beneficial
                agreement.
              </p>
            </div>
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

export default HowItWorks;
