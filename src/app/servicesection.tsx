import React from "react";
import { motion } from "framer-motion";
import Imagetest from "../assets/Online test.gif";
import Imageacad from "../assets/Online learning-1.gif";
import Imagelang from "../assets/Learning languages.gif";
import Imagedoubt from "../assets/Service 24_7.gif";
import Imagesession from "../assets/Live collaboration.gif";
import Imagestudy from"../assets/Notes.gif";
import Image from "next/image";

const ServicesSection: React.FC = () => {
  return (
    <section 
    id="services"
    className="w-full py-12 md:py-8 lg:py-16 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center animate__animated animate__fadeIn"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="space-y-2">
            {/* <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm text-customDgreen dark:bg-gray-800">
              Our Services
            </div> */}
            <h2 className="text-3xl font-bold tracking-tighter text-[#1a202c] dark:text-gray-100 sm:text-4xl md:text-4xl">
              Tailored Tutoring for Your Success
            </h2>
            <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-lg lg:text-xl xl:text-lg">
              Our experienced tutors offer personalized support in a wide range
              of subjects to help you reach your academic goals.
            </p>
          </div>
        </motion.div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          <motion.div
            className="flex flex-col items-center gap-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
          >
            <div className="w-[70%] sm:w-[50%] md:w-[90%] lg:w-[90%] xl:w-[90%]">
              <Image
                src={Imageacad}
                alt="Academic Tutoring"
                width={100}
                height={100}
                layout="responsive"
                objectFit="cover"
                unoptimized
              />
            </div>
            <h3 className="text-xl font-bold text-[#1a202c]">Academic Tutoring</h3>
            <p className="w-[70%] text-[#4a5568] dark:text-gray-400">
              Get personalized support in core academic subjects like math,
              science, and English.
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center gap-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
          >
            <div className="w-[70%] sm:w-[50%] md:w-[90%] lg:w-[90%] xl:w-[90%]">
              <Image
                src={Imagetest}
                alt="Test Prep"
                width={100}
                height={100}
                layout="responsive"
                objectFit="cover"
                unoptimized
              />
            </div>
            <h3 className="text-xl font-bold text-[#1a202c]">Test Prep</h3>
            <p className="w-[70%] text-[#4a5568] dark:text-gray-400">
              Prepare for standardized tests like the SAT, AMC and AP with
              expert guidance.
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center gap-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeInOut" }}
          >
            <div className="w-[70%] sm:w-[50%] md:w-[90%] lg:w-[90%] xl:w-[90%]">
              <Image
                src={Imagelang}
                alt="Language Learning"
                width={100}
                height={100}
                layout="responsive"
                objectFit="cover"
                unoptimized
              />
            </div>
            <h3 className="text-xl font-bold text-[#1a202c]">Language Learning</h3>
            <p className="w-[70%] text-[#4a5568] dark:text-gray-400">
              Learn a new language or improve your proficiency with our
              experienced tutors.
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center gap-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeInOut" }}
          >
            <div className="w-[70%] sm:w-[50%] md:w-[90%] lg:w-[90%] xl:w-[90%]">
              <Image
                src={Imagedoubt}
                alt="Language Learning"
                width={100}
                height={100}
                layout="responsive"
                objectFit="cover"
                unoptimized 
              />
            </div>
            <h3 className="text-xl font-bold text-[#1a202c]">24/7 Live Doubt session</h3>
            <p className="w-[70%] text-[#4a5568] dark:text-gray-400">
              Get your doubts ready , we have our 24/7 live doubt solving session with our experienced teachers.
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center gap-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeInOut" }}
          >
            <div className="w-[70%] sm:w-[50%] md:w-[90%] lg:w-[90%] xl:w-[90%]">
              <Image
                src={Imagesession}
                alt="Language Learning"
                width={100}
                height={100}
                layout="responsive"
                objectFit="cover"
                unoptimized
              />
            </div>
            <h3 className="text-xl font-bold text-[#1a202c]">Interactive one-to-one sessions</h3>
            <p className="w-[70%] text-[#4a5568] dark:text-gray-400">
              we take care of each and every students by giving them personalised and interactive session.
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center gap-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeInOut" }}
          >
            <div className="w-[70%] sm:w-[50%] md:w-[90%] lg:w-[90%] xl:w-[90%]">
              <Image
                src={Imagestudy}
                alt="Language Learning"
                width={100}
                height={100}
                layout="responsive"
                objectFit="cover"
                unoptimized
              />
            </div>
            <h3 className="text-xl font-bold text-[#1a202c]">Study Material</h3>
            <p className="w-[70%] text-[#4a5568] dark:text-gray-400">
              we have experienced tutors that help your students in their learning and providing notes and study material. 
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
