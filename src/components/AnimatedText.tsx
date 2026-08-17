import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const characters = text.split('');
  const totalChars = characters.length;

  return (
    <p ref={containerRef} className={`relative select-none ${className}`}>
      {characters.map((char, index) => {
        const start = index / totalChars;
        const end = start + 1 / totalChars;
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

        return (
          <span key={index} className="relative inline-block whitespace-pre">
            <span className="opacity-20">{char}</span>
            <motion.span style={{ opacity }} className="absolute left-0 top-0 text-[#D7E2EA]">
              {char}
            </motion.span>
          </span>
        );
      })}
    </p>
  );
};
