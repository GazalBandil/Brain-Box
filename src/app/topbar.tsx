import React, { useState } from "react";
import Logo from "../assets/logo_brainbox-removebg-preview.png";
import Image from "next/image";

const Topbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="ms-[1%] px-4 lg:px-6 h-14 mt-[2%] flex items-center">
      <a className="flex items-center" href="#">
        <div className="mt-[2%] w-[90%] sm:w-[90%] h-[70%] md:w-[90%] lg:w-[90%]">
          <Image
            src={Logo}
            alt="Hero"
            width={100}
            height={100}
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <span className="sr-only">Tutoring Experts</span>
      </a>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#F3EADA"
          d="M38.3,-65.2C49.2,-60,57.3,-48.9,64.8,-37C72.4,-25.2,79.4,-12.6,78.8,-0.3C78.2,11.9,70,23.8,61.5,34C53,44.2,44.2,52.8,33.9,61.7C23.6,70.6,11.8,79.8,-1.5,82.4C-14.8,84.9,-29.5,80.8,-41.5,72.9C-53.5,65,-62.8,53.3,-71.4,40.5C-79.9,27.7,-87.8,13.9,-90.2,-1.4C-92.6,-16.7,-89.6,-33.3,-80.6,-45.5C-71.7,-57.6,-56.9,-65.3,-42.5,-68.5C-28.1,-71.7,-14.1,-70.3,-0.2,-70C13.7,-69.7,27.4,-70.4,38.3,-65.2Z"
          transform="translate(100 100)"
        />
      </svg>
      <div className="block md:hidden ml-auto">
        <button onClick={toggleMenu} className="focus:outline-none">
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          )}
        </button>
      </div>
      <nav
        className={`md:flex gap-4 sm:gap-6 ${
          isOpen ? "block" : "hidden"
        } md:block absolute md:static top-14 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0`}
      >
        <div
          className={`flex flex-col md:flex-row ${isOpen ? "mt-2" : "mt-0"}`}
        >
          <a
            className="text-md font-semibold hover:underline underline-offset-4 transition-all duration-300 ease-in-out hover:text-bold p-2"
            href="#services"
          >
            Services
          </a>
          <a
            className="text-md font-medium hover:underline underline-offset-4 transition-all duration-300 ease-in-out p-2"
            href="#about"
          >
            AboutUs
          </a>
          <a
            className="text-md font-medium hover:underline underline-offset-4 transition-all duration-300 ease-in-out p-2"
            href="#Testimonial"
          >
            Testimonials
          </a>
          <a
            className="text-md font-medium hover:underline underline-offset-4 transition-all duration-300 ease-in-out p-2"
            href="#contact"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Topbar;
