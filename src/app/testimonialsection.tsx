import React from 'react';
import Image1 from "../assets/man_4140048.png";
import Image from "next/image";
import { motion } from 'framer-motion';
import { FaUserCircle } from 'react-icons/fa';


type Testimonial = {
  name: string;
  title: string;
  company: string;
  image: string;
  rating: number;
  text: string;
};

const testimonials: Testimonial[] = [
  {
    name: 'Aryan',
    title: 'student',
    company: 'Florida',
    image: "FaUserCircle",
    rating: 3,
    text: 'Helped me increase my SAT score from 1100 to 1550. Increased my chances of selection.'
  },
  {
    name: 'Shyan',
    title: 'student',
    company: 'California, US',
    image: "FaUserCircle",
    rating: 4,
    text: 'Helped me to score 4/5 points in my AP BIOLOGY exam! I was truly helped and started to love biology even more!'
  },
  {
    name: 'Ananya',
    title: 'student',
    company: 'US',
    image: "FaUserCircle",
    rating: 5,
    text: 'Classes felt like home, comforting and the best always.'
  },
  {
    name: 'Zyan',
    title: 'student',
    company: 'New York',
    image: "FaUserCircle",
    rating: 5,
    text: 'Started to love math when I started learning with him.'
  },
  {
    name: 'Mayank',
    title: 'student',
    company: 'North Carolina, US',
    image: "FaUserCircle",
    rating: 4,
    text: 'My science base was really weak and now I can finally say my science is strong to the core thanks to her for the extra efforts in helping me clear my basics.'
  },
];

const StarIcon = ({ filled }: { filled: boolean }) => (
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
    className={`w-4 h-4 ${filled ? 'fill-primary' : 'fill-muted stroke-muted-foreground'}`}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const TestimonialCard: React.FC<Testimonial> = ({ name, title, company, image, rating, text }) => (
  <div
    id='Testimonial'
    className="rounded-lg w-[50%] bg-slate-100 p-6 shadow-md transition-all duration-300 ease-in-out hover:shadow-xl shadow-yellow-300 scroll-mt-14">
    <div className="flex items-start">
      <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full mr-4">
        {image === "FaUserCircle" ? (
          <FaUserCircle className="h-full w-full text-gray-500" />
        ) : (
          <Image
            className="aspect-square h-full w-full"
            alt={name}
            src={image}
            width={40}
            height={40}
          />
        )}
      </span>
      <div>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-muted-foreground">{title}, {company}</p>
        <div className="flex items-center gap-0.5 mt-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon key={i} filled={i < rating} />
          ))}
        </div>
      </div>
    </div>
    <blockquote className="mt-4 text-sm leading-relaxed">
      {text}
    </blockquote>
  </div>
);

const TestimonialSection: React.FC = () => (
  <section className="bg-background py-12 md:py-20">
    <div className="container mx-auto px-4 md:px-6 overflow-hidden relative">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Our Customers Say</h2>
        <p className="mt-4 text-muted-foreground md:text-lg">
          Hear from our satisfied customers about their experience with our products and services.
        </p>
      </div>
      <div className="mt-12 flex space-x-6 animate-marquee">
        {testimonials.concat(testimonials).map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
    <style jsx>{`
      @keyframes marquee {
        0% {
          transform: translateX(0%);
        }
        100% {
          transform: translateX(-50%);
        }
      }
      .animate-marquee {
        display: flex;
        width: calc(200% + 24px);
        animation: marquee 30s linear infinite;
      }
    `}</style>
  </section>
);

export default TestimonialSection;
