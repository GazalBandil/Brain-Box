import React from "react";
import HeroImg from "./../assets/Online learning-amico.png";
import comma1 from "./../assets/quote_4990659.png";
import comma2 from "./../assets/quote_4990669.png";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  const TypingText: React.FC<{ text: string }> = ({ text }) => {
    const lines = text.split("\n");

    return (
      <>
        {lines.map((line, lineIndex) => (
          <motion.div
            key={lineIndex}
            style={{
              display: "inline-block",
              whiteSpace: "nowrap",
              overflow: "hidden",
              lineHeight: "0.8",
              paddingBottom: "0.2em",
              marginRight: lineIndex === 0 ? "0.2em" : "0", // Adjust spacing for the first line
            }}
          >
            {line.split(" ").map((word, wordIndex) => (
              <React.Fragment key={wordIndex}>
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={letterIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.05,
                      delay:
                        (lineIndex * line.length +
                          wordIndex * word.length +
                          letterIndex) *
                        0.05,
                    }}
                    style={
                      word === "Brain" || word === "Box"
                        ? { color: "#ff6347" }
                        : {}
                    }
                  >
                    {letter}
                  </motion.span>
                ))}
                {wordIndex < line.split(" ").length - 1 && " "}
              </React.Fragment>
            ))}
            <br />
          </motion.div>
        ))}
      </>
    );
  };

  const whatsappNumber = "919302323000"; // Replace with the actual number
  const whatsappMessage = encodeURIComponent("I want to book my free demo");

  return (
    <section className="w-full py-15 md:py-16 lg:py-28 xl:pb-8 xl:pt-20">
      <div className="container mx-auto flex flex-row w-full px-4 md:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px] w-full">
          <div className="space-y-4 animate__animated animate__fadeIn">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{ repeat: Infinity, repeatType: "loop" }}
              >
                <TypingText text={`Unlock Your Potential\nwith Brain Box`} />
              </motion.div>
            </h1>

            <p className="max-w-[600px] text-[#4a5568] md:text-md font-medium dark:text-gray-400">
              Personalized tutoring services to help you excel in any subject.
              Our experienced tutors are dedicated to your academic success.
            </p>
            <br />
            <div>
              <h2 className="text-red-500 font-bold text-3xl">
                Book your 2-free demo session now!
              </h2>
              <a
                className="inline-flex mt-[2%] h-10 items-center justify-center rounded-md bg-customOrange px-8 text-sm font-medium bg-[#ff6347] text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Now
              </a>
            </div>
            <br />
            <div className="shadow-md bg-slate-50 p-4">
              <div className="flex items-start">
                <Image src={comma1} alt="comma" width={30} height={30} />
                <div className="ml-2 mt-4">
                  <p className="">
                    Discover the ultimate platform for parents and students
                  </p>
                  <p className="font-bold text-lg text-red-500">
                    The best place for College Board students to excel and achieve their dreams!
                  </p>
                  <p className="text-lg text-justify">
                    Your first choice for top-notch academics and unparalleled
                    support in competitive exams.
                  </p>
                </div>
              </div>
              <div className="flex justify-end">
                <Image src={comma2} alt="comma" width={30} height={30} />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center rounded-xl object-cover object-center sm:w-full lg:order-last animate__animated animate__fadeInRight">
            <div style={{ width: "100%", height: "80%" }}>
              <Image
                src={HeroImg}
                alt="Hero"
                width={200}
                height={200}
                layout="responsive"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
