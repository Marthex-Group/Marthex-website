import React from "react";
import animatedImage from "../assets/images/heroImage-home.gif";

function Contact() {

  return (
    <div
      id="contact"
      className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 text-black"
    >
      <div className="flex flex-col justify-between">
        <div className="space-y-2">
          {/* <h2 className="text-4xl font-bold leadi lg:text-5xl text-center">
            Let's talk!
          </h2> */}
          <div className="w-full">
            <img
              src={animatedImage}
              alt="Team collaboraton"
              className="contactHeroImage "
            />
          </div>
        </div>
        {/* <img src="assets/svg/doodle.svg" alt="" className="p-6 h-52 md:h-64" /> */}
      </div>
      <div
        className="py-6 md:py-0 md:px-6"
        style={{ display: "flex", alignItems: "center", alignContent:'center' }}
      >
        {/* <br />
        <br />
        <br /> */}

        <div className="space-y-4">
          <h1 className="text-2xl font-bold">Get in touch</h1>
          <p className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-2 sm:mr-6"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>24th street, Monrovia</span>
          </p>
          <p className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-2 sm:mr-6"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
            </svg>
            <span>+2250595887561</span>
          </p>
          <p className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-2 sm:mr-6"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
            <span>marthex73@gmail.com</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
