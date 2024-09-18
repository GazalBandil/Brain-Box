// components/KeyFeatures.js
// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';

// const KeyFeatures = () => {
//   const featuresRef = useRef([]);

//   useEffect(() => {
//     gsap.from(featuresRef.current, {
//       duration: 1,
//       opacity: 0,
//       y: 50,
//       stagger: 0.3,
//       ease: 'power3.out'
//     });
//   }, []);

//   return (
//     <section className="py-12 bg-gray-100">
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="flex flex-col items-center justify-center space-y-8">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-gray-800">Key Features</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               { title: '24*7', description: 'Doubt resolution facility', color: 'text-blue-600' },
//               { title: 'Virtual', description: 'Interactive one-to-one sessions', color: 'text-green-600' },
//               { title: 'Animations', description: 'Engaging animations and notes', color: 'text-purple-600' },
//               { title: 'Young Tutors', description: 'Energetic and enthusiastic tutors', color: 'text-red-600' }
//             ].map((feature, index) => (
//               <div
//                 key={index}
//                 ref={el => (featuresRef.current[index] = el)}
//                 className="bg-white rounded-lg shadow-md p-6 text-center transform transition-transform hover:scale-105"
//               >
//                 <div className={`text-4xl ${feature.color} mb-4`}>{feature.title}</div>
//                 <p className="text-lg text-gray-700 mb-4">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default KeyFeatures;
