import React, { useState } from 'react';
import { motion } from 'framer-motion';

type Color = 'yellow' | 'orange' | 'green' | 'blue' | 'purple';

interface Course {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  color: Color;
  subjects: string[];
}

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const CoursesSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const courses: Course[] = [
    { id: 1, title: "Basic to advance", subtitle: "Science", description: "Dive deep into the fascinating world of earth science. Through hands-on experiments and interactive lessons.", color: "yellow", subjects: ["Physics", "Chemistry", "Biology"] },
    { id: 2, title: "Basics to Advance", subtitle: "Mathematics", description: "Improve your math skills with personalized online tutoring.", color: "orange", subjects: ["School Level Math", "AMC Math", "SAT Math"] },
    { id: 3, title: "Basic to advance", subtitle: "Coding / Programming", description: "Find the best tutor for coding and programming classes at affordable prices.", color: "green", subjects: ["JavaScript", "Python", "Java"] },
    { id: 4, title: "Basic to advance", subtitle: "English", description: "English courses offer an enriching and comprehensive journey into the world of literature, language, and communication. ", color: "blue", subjects: ["School English", "SAT English"] },
    { id: 5, title: "Basic to advance", subtitle: "10th to 12th Grade", description: "Our 10th and 12th-grade science courses offer an in-depth and engaging journey into the fascinating realms of subjects", color: "purple", subjects: ["SAT Exam", "AP Exam", "Olampiad Exam"] },
  ];

  const colorClasses: { [key in Color]: { bg: string; text: string; button: string; dot: string } } = {
    yellow: {
      bg: 'bg-yellow-100',
      text: 'text-yellow-600',
      button: 'bg-yellow-500',
      dot: 'bg-yellow-600',
    },
    orange: {
      bg: 'bg-orange-100',
      text: 'text-orange-600',
      button: 'bg-orange-500',
      dot: 'bg-orange-600',
    },
    green: {
      bg: 'bg-green-100',
      text: 'text-green-600',
      button: 'bg-green-500',
      dot: 'bg-green-600',
    },
    blue: {
      bg: 'bg-blue-100',
      text: 'text-blue-600',
      button: 'bg-blue-500',
      dot: 'bg-blue-600',
    },
    purple: {
      bg: 'bg-purple-100',
      text: 'text-purple-600',
      button: 'bg-purple-500',
      dot: 'bg-purple-600',
    },
  };

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Discover Available <span className="text-orange-500">Courses</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <motion.div
            key={course.id}
            className={`p-6 ${colorClasses[course.color].bg} rounded-lg relative`}
            onMouseEnter={() => setHoveredCard(course.id)}
            onMouseLeave={() => setHoveredCard(null)}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            <div className="relative z-10">
              <h2 className={`text-lg font-semibold ${colorClasses[course.color].text}`}>{course.title}</h2>
              <h3 className="text-2xl font-bold text-gray-800">{course.subtitle}</h3>
              <p className="text-gray-700 mt-2">{course.description}</p>
              <button className={`mt-4 px-4 py-2 ${colorClasses[course.color].button} text-white rounded`}>Explore Now</button>
            </div>
            <div className="absolute top-6 right-6 z-0 flex flex-wrap gap-1">
              {[...Array(6)].map((_, i) => (
                <div key={i} className={`w-2 h-2 rounded-full ${colorClasses[course.color].dot} opacity-50`}></div>
              ))}
            </div>
            {hoveredCard === course.id && (
              <motion.div
                className={`flex flex-col absolute inset-0 items-center justify-center ${colorClasses[course.color].bg} bg-opacity-100 p-6 rounded-lg shadow-lg z-20`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <h2 className={`text-2xl font-bold mb-2 ${colorClasses[course.color].text}`}>We Prepare You For</h2>
                <br />
                <ul className="w-full">
                  {course.subjects.map((subject, index) => (
                    <li key={index} className="text-md font-medium text-gray-800 border-b border-gray-300 py-1">{subject}</li>
                  ))}
                </ul>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CoursesSection;
