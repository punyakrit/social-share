"use client";

import { TypewriterEffectSmooth } from "./ui/TypeWriter";

export default function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Create",
      className: "text-white text-3xl md:text-6xl    font-sans font-extrabold",
    },
    {
      text: "Your",
      className: "text-white text-3xl md:text-6xl    font-sans font-extrabold",
    },
    {
      text: "Personalized ",
      className: "text-purple-500  text-3xl md:text-6xl    font-sans font-extrabold",
    },
    {
      text: "Page",
      className: "text-white text-3xl md:text-6xl    font-sans font-extrabold",
    },
   
  ];
  return (
    <>
    {/* <div className="max-w-7xl mx-auto p-4 ">
        <div className="w-4/5"> */}
      <TypewriterEffectSmooth words={words} />
      {/* </div>
    </div> */}
      
    </>
  );
}
