import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import apprenticeshipImage from "../assets/images/student-red.jpg";

function Eligibility() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-white">
      <div className="container flex flex-col px-6 py-16 mx-auto space-y-6 lg:space-y-12 lg:h-[32rem] lg:flex-row lg:items-center">
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
            <h1 className="text-3xl ml-8 font-semibold tracking-wide text-gray-800 dark:text-black lg:text-4xl mb-8">
              Apprenticeship Eligibility:
            </h1>

            <div className="space-y-5">
              <p className="text-black ml-8">
                Our apprenticeships are awarded to highly motivated individuals
                who demonstrate a strong desire to enhance their skills but lack
                the financial means to do so. The selection process involves
                evaluating dedication, passion, and commitment to personal and
                professional growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Eligibility;
