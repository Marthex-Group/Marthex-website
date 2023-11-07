import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import apprenticeshipImage from "../assets/images/donors.svg";

function Donor() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-white">
      <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
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
        <div className="w-full lg:w-1/2" data-aos="flip-down">
          <div className="lg:max-w-lg">
            <h1 className="text-3xl ml-8 font-semibold tracking-wide text-gray-800 dark:text-black lg:text-4xl">
              Donor Engagement:
            </h1>

            <div className="mt-8 space-y-5">
              <p className="text-black ml-8">
                To sustain and expand the apprenticeship program, we actively
                seek donors who align with our mission and are willing to
                contribute resources. These donations support 50% of students
                who require financial assistance, allowing us to provide quality
                education to a diverse range of learners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Donor;
