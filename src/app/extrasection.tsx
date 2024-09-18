import React from "react";
import Image1 from "../assets/teacher_12571469.png";
import Image2 from "../assets/online-test_13972644.png";
import Image3 from "../assets/blended-learning_15748362.png";
import Image4 from "../assets/languages_3898150.png";
import Image5 from "../assets/webinar_2997554.png";
import Image6 from "../assets/group_921347.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const ExtraSection: React.FC = () => {
  const variants = {
    hidden: (direction: string) => {
      switch (direction) {
        case "left":
          return { opacity: 0, x: -100 };
        case "right":
          return { opacity: 0, x: 100 };
        case "up":
          return { opacity: 0, y: -100 };
        case "down":
          return { opacity: 0, y: 100 };
        default:
          return { opacity: 0 };
      }
    },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 1.5 } },
  };

  const directions = ["left", "right", "up", "down", "left", "right"];
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1, 
  });

  console.log("Section in view:", inView); // Debug log

  return (
    <section
      className="bg-[#f3eada4d] w-full py-12 md:py-24 lg:py-34 dark:bg-gray-800"
      ref={ref}
    >
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen w-[90%] mx-auto">
        <div className="w-full md:w-1/4 mx-auto text-left mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a202c]">
            Online Learning With{" "}
            <span className="text-[#ff6347]">e-Tuitions</span>
          </h1>
          <p className="text-sm md:text-base text-[#4a5568] mt-4">
            We will connect you to your teachers &amp; peers. Let us tell you
            what makes us one of the Best Online Tuition websites.
          </p>
        </div>
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 w-full md:w-2/4 mx-auto">
          {[Image1, Image5, Image4, Image3, Image6, Image2].map((image, index) => (
            <motion.div
              key={index}
              className="rounded-lg border bg-white dark:bg-gray-700 text-card-foreground shadow-lg hover:shadow-2xl transition-shadow duration-300"
              custom={directions[index]}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={variants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="p-6">
                <Image
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="w-16 h-16 mb-4"
                  width={60}
                  height={60}
                  style={{ objectFit: "cover" }}
                />
                <h2 className="text-lg font-semibold text-[#234e43]">
                  {index === 0 && "Classes for School"}
                  {index === 1 && "Book Demo Class"}
                  {index === 2 && "Classes in Regional Language"}
                  {index === 3 && "Diverse Courses"}
                  {index === 4 && "Experienced Teachers"}
                  {index === 5 && "Student's Results"}
                </h2>
                <p className="text-[#4a5568] text-sm mt-2">
                  {index === 0 && "We offer online classes for students in school college."}
                  {index === 1 && "Just choose your subject/course &amp; take a free trial class."}
                  {index === 2 && "Find teachers who will teach you in your mother tongue."}
                  {index === 3 && "Coding, Foreign languages, Dance, Music. Take online classes for all."}
                  {index === 4 && "Take lessons from the Best Teachers in India."}
                  {index === 5 && "Every student's results &amp; reviews are important to us."}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtraSection;
