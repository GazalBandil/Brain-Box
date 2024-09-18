import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faqsection: React.FC = () => {
  return (
    <div className="w-full px-4 py-8 md:py-16 lg:py-20 xl:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">
          Frequently Asked <span className="text-orange-500">Questions</span>
        </h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              How are the classes conducted?
            </AccordionTrigger>
            <AccordionContent className="text-xl text-gray-700 dark:text-gray-300">
              Our classes are conducted one-on-one via Zoom Application, ensuring personalized attention and a tailored learning experience.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              What is the duration of one class?
            </AccordionTrigger>
            <AccordionContent className="text-xl text-gray-700 dark:text-gray-300">
              Each class lasts approximately 50-60 minutes, providing ample time for thorough understanding and engagement.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              How are parents updated about the child's progress?
            </AccordionTrigger>
            <AccordionContent className="text-xl text-gray-700 dark:text-gray-300">
              We hold monthly parent-teacher meetings and provide a success graph at the end of each month. Daily class reports are also shared with parents.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              What if we are unable to attend a session?
            </AccordionTrigger>
            <AccordionContent className="text-xl text-gray-700 dark:text-gray-300">
              If there is an unavoidable situation from either the tutor's or the student's side, we offer flexibility to reschedule the session within the same week.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              What if my child is unable to understand the tutor?
            </AccordionTrigger>
            <AccordionContent className="text-xl text-gray-700 dark:text-gray-300">
              We ensure our tutors are well-trained, but if your child faces difficulties, we offer the first two sessions for free, allowing your child to make an informed decision and choose their tutor.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            What is the per session fee ? 
            </AccordionTrigger>
            <AccordionContent className="text-xl text-gray-700 dark:text-gray-300">
            The fees depends on the grade and course of the subject you can contact on WhatsApp to get exact details of per session for your kid.            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Faqsection;
