"use client";

import { useState, useEffect } from 'react';
import { TypeWriter } from "./ui/TypeWriter";
import { Highlight } from './ui/background-beams';
export default function TypewriterEffectSmoothDemo() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const lines = [
    [
      { text: "Create", className: "text-white text-3xl md:text-6xl font-sans font-extrabold" },
      { text: " Your", className: "text-white text-3xl md:text-6xl font-sans font-extrabold" },
      { text: " Personalized", className: "text-purple-500 text-3xl md:text-6xl font-sans font-extrabold" },
      { text: " Page", className: "text-white text-3xl md:text-6xl font-sans font-extrabold" },
    ],
    [
      { text: "Discover", className: "text-white text-3xl md:text-6xl font-sans font-extrabold" },
      { text: " An", className: "text-white text-3xl md:text-6xl font-sans font-extrabold" },
      { text: " Amazing", className: "text-white text-3xl md:text-6xl font-sans font-extrabold" },
      { text: " Community", className: "text-purple-500 text-3xl md:text-6xl font-sans font-extrabold" },
    ],
    [
      { text: "Explore", className: "text-white text-3xl md:text-6xl font-sans font-extrabold" },
      { text: " New", className: "text-white text-3xl md:text-6xl font-sans font-extrabold" },
      { text: " Horizons", className: "text-purple-500 text-3xl md:text-6xl font-sans font-extrabold" },
      { text: " With", className: "text-white text-3xl md:text-6xl font-sans font-extrabold" },
      { text: " Us", className: "text-white text-3xl md:text-6xl font-sans font-extrabold" },
    ],
    [
      { text: "Build", className: "text-white text-3xl md:text-6xl font-sans font-extrabold" },
      { text: " Your", className: "text-white text-3xl md:text-6xl font-sans font-extrabold" },
      { text: " Dream", className: "text-purple-500 text-3xl md:text-6xl font-sans font-extrabold" },
      { text: " Profile", className: "text-white text-3xl md:text-6xl font-sans font-extrabold" },
    ],
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % lines.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [lines.length]);

  return (
    <>
      <TypeWriter lines={lines} />
    </>
  );
}