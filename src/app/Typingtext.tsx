import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx'; // For conditional class names
import tw from 'twin.macro'; 

interface TypingTextProps {
  text: string;
}

const TypingText: React.FC<TypingTextProps> = ({ text }) => {
  const lines = text.split('\n');

  return (
    <>
      {lines.map((line, index) => (
        <motion.p
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 1, // Adjust delay between lines
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 1, // Delay before repeating the animation
          }}
          style={{ display: 'inline-block', whiteSpace: 'nowrap' }}
        >
          {line}
          {index === lines.length - 1 ? (
          <motion.span
          key={`${index}-span`}
            className={clsx('animate-pulse', tw`text-customOrange`)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: 'loop',
              repeatDelay: 1, // Delay before repeating the animation
            }}
          >
            |
          </motion.span>
          ) : null}
        </motion.p>
      ))}
    </>
  );
};

export default TypingText;
