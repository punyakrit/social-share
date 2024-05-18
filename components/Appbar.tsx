import React from "react";

function Appbar() {
  return (
    <div className="z-20 mr-20 h-20 w-full rounded-b-xl bg-black/10 backdrop-blur-sm fixed">
      <div className=" text-white flex h-full px-6 md:px-20 justify-between     items-center ">
        <div className=" font-bold  text-3xl">ShareHub</div>
        <div className="flex items-center space-x-10">
          <div>Explore</div>
          <div>About</div>
          <div>Contact</div>

          <div className="border px-4 py-2 font-bold rounded-2xl">Register</div>
        </div>
      </div>
    </div>
  );
}

export default Appbar;
