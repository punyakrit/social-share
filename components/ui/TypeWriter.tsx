"use client";

import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const TypeWriter = ({
  lines,
  className,
  cursorClassName,
}: {
  lines: {
    text: string;
    className?: string;
  }[][];
  className?: string;
  cursorClassName?: string;
}) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTypewriterEffect = () => {
      const line = lines[currentLineIndex];
      const word = line[currentWordIndex].text;
      const isLastWord = currentWordIndex === line.length - 1;

      if (!isDeleting && displayedText.length < word.length) {
        setDisplayedText(word.substring(0, displayedText.length + 1));
      } else if (isDeleting && displayedText.length > 0) {
        setDisplayedText(word.substring(0, displayedText.length - 1));
      } else if (!isDeleting && displayedText.length === word.length) {
        if (isLastWord) {
          setTimeout(() => setIsDeleting(true), 4000);
        } else {
          setTimeout(() => {
            setCurrentWordIndex((prev) => prev + 1);
            setDisplayedText("");
          }, 0);
        }
      } else if (isDeleting && displayedText.length === 0) {
        setIsDeleting(false);
        setCurrentWordIndex(0);
        setCurrentLineIndex((prev) => (prev + 1) % lines.length);
      }
    };

    const timeout = setTimeout(handleTypewriterEffect, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting]);

  const renderWords = () => {
    return lines[currentLineIndex].map((word, index) => (
      <span key={index} className={word.className || className}>
        {currentWordIndex > index ? word.text : (currentWordIndex === index ? displayedText : "")}
      </span>
    ));
  };

  return (
    <motion.div>
      {renderWords()}
      <span className={cursorClassName}>|</span>
    </motion.div>
  );
};