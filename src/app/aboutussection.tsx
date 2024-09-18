import React from "react";
import Image1 from "../assets/user_9793970.png";
import Image2 from "../assets/little-girl-with-laptop-plays-games-concept-game-addiction.jpg";
import Image3 from "../assets/target_3233474.png";
import Image4 from "../assets/vision_16894350.png";
import Image from "next/image";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutUsSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div 
    id="about"
    className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
      <div className="grid items-center w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
        <motion.div
          ref={ref}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: inView ? 0 : -100, opacity: inView ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="relative flex items-center justify-center p-4 bg-white rounded-lg shadow-lg"
        >
          <div className="relative w-[400px] h-[300px]">
            <Image
              src={Image2}
              alt="Student"
              className="rounded-lg"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="absolute bottom-0 left-0 flex items-center p-4 bg-white rounded-lg shadow-lg translate-y-1/2">
            <div className="relative w-10 h-10 overflow-hidden">
              <Image
                src={Image1}
                alt="User"
                className="aspect-square  h-full w-full"
                width={40}
                height={40}
              />
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: inView ? 0 : 100, opacity: inView ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="transform transition-transform duration-1000"
        >
          <h2 className="mb-2 text-sm font-semibold text-gray-600">ABOUT US</h2>
          <h1 className="mb-4 text-3xl font-bold text-gray-900">
            Brain Box{" "}
            <span className="text-green-500 underline">online tuition</span>{" "}
            website for quality education
          </h1>
          <p className="mb-6 text-gray-700">
            BRAIN BOX is a platform dedicated to inspiring a love for learning
            in students. Our team consists of outstanding educators who serve as
            not only tutors but also mentors and friends.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center text-lg text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-green-500"
              >
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
              <span className="ml-2 text-md ">Expert Trainers</span>
            </li>
            <li className="flex items-center text-lg text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-green-500"
              >
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
              <span className="ml-2">1-on-1 Live Tuition</span>
            </li>
            <li className="flex items-center text-lg text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-green-500"
              >
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
              <span className="ml-2">Flexible Timings</span>
            </li>
          </ul>
        </motion.div>
      </div>
      <br />
      <br />
      <div className="flex flex-col md:flex-row gap-6 w-[80%]">
        <div className="bg-slate-100 shadow-md text-gray-700 text-left justify-center p-5 w-full md:w-[60%] hover:border-4 hover:border-yellow-400">
          <h5 className="font-bold text-lg mb-2 flex items-center">
            Our Mission
            <Image
              src={Image3}
              alt="Mission Image"
              width={50}
              height={50}
              className="ml-2 shadow:sm"
            />
          </h5>
          <p>
            To provide live one-to-one online tutoring class is to provide
            personalized, interactive education tailored to each student's
            unique needs, fostering a deep understanding of subjects, enhancing
            academic performance, and building confidence through real-time
            feedback and guidance from expert tutors.
          </p>
        </div>
        <div className="bg-slate-100 shadow-md text-gray-700 text-left justify-center p-5 w-full md:w-[60%] hover:border-4 border-blue-400">
          <h5 className="flex items-center font-bold text-lg mb-2">
            Our Vision
            <Image
              src={Image4}
              alt="Mission Image"
              width={50}
              height={50}
              className="ml-2 shadow:sm"
            />
          </h5>
          <p>
            Our vision of one-to-one live tutoring class is to revolutionize
            education by making high-quality, individualized learning accessible
            to all students, empowering them to reach their full potential,
            cultivate a lifelong love of learning, and achieve academic and
            personal success in a supportive, engaging, and flexible
            environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
