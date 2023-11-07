import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChalkboardTeacher,
  faUsers,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import student from "../assets/images/student1.png";

function About() {
  return (
    <section className="dark:text-gray-100" id="about">
      <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
        <div>
          <h2 className="text-3xl font-bold tracki text-center sm:text-5xl dark:text-black">
            Empowering Futures in Tech
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-400">
            Join our innovative tech company and embark on a journey of hands-on
            learning and professional growth.
          </p>
        </div>
        <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h3 className="text-2xl font-bold tracki sm:text-3xl dark:text-black">
              Expert Guidance, Exceptional Results
            </h3>
            <p className="mt-3 text-lg dark:text-gray-400">
              Elevate your skills with our expert trainers and personalized
              mentorship programs. Experience hybrid learning tailored for your
              success.
            </p>
            <div className="mt-12 space-y-12">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-orange-600 dark:text-gray-900">
                    <FontAwesomeIcon
                      icon={faChalkboardTeacher}
                      style={{ color: "white" }}
                      className="w-7 h-7"
                    />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium leadi dark:text-black">
                    Expert Trainers
                  </h4>
                  <p className="mt-2 dark:text-gray-400">
                    Learn from experienced professionals who guide you through
                    the intricacies of software development, digital marketing,
                    and graphic design.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-orange-600 dark:text-gray-900">
                    <FontAwesomeIcon
                      icon={faUsers}
                      style={{ color: "white" }}
                      className="w-7 h-7"
                    />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium leadi dark:text-black">
                    Mentorship
                  </h4>
                  <p className="mt-2 dark:text-gray-400">
                    Experience personalized mentorship, where your growth is our
                    priority. Benefit from one-on-one guidance and support from
                    industry experts.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-orange-600 dark:text-gray-900">
                    <FontAwesomeIcon
                      icon={faGraduationCap}
                      style={{ color: "white" }}
                      className="w-7 h-7"
                    />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium leadi dark:text-black">
                    Hybrid Learning
                  </h4>
                  <p className="mt-2 dark:text-gray-400">
                    Immerse yourself in our hybrid learning environment,
                    combining online education with hands-on experience. Master
                    the latest technologies and tools for a successful career.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="mt-10 lg:mt-0">
            <img
              src={student}
              alt=""
              className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
