import React from "react";

const Seperator = ({ className }: { className: string }) => {
  return (
    <div
      className={
        className
          ? className
          : "h-1 mx-auto bg-purple-500/10 mt-10 w-4/5 rounded-lg"
      }
    ></div>
  );
};

export default Seperator;
