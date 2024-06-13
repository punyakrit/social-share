"use client";
import { AlignJustify, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

function AppBar({ user }: any) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBar = () => {
    setIsOpen(!isOpen);
    const styleNav: any = document.getElementsByClassName("sidebar")[0];
    if (styleNav) {
      styleNav.style.display = !isOpen ? "block" : "none";
      styleNav.style.position =
        window.innerWidth <= 1024 ? "fixed" : "relative";
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const styleNav: any = document.getElementsByClassName("sidebar")[0];
      if (styleNav) {
        if (window.innerWidth > 1024) {
          styleNav.style.display = "block";
          styleNav.style.position = "relative";
        } else {
          styleNav.style.display = isOpen ? "block" : "none";
          styleNav.style.position = isOpen ? "fixed" : "relative";
        }
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed ${!isOpen ? `bg-gray-900/70` : null} ${
        !isOpen ? `backdrop-blur-lg` : null
      }  w-screen  p-5 lg:hidden text-white z-50 flex`}
    >
      <button onClick={toggleBar} className="">
        {!isOpen ? <AlignJustify /> : <X />}
      </button>
      <Link href={`/${user.uri}`} className="flex justify-center w-full">
        <div className={` ${!isOpen ? `block` : `hidden`} font-semibold`}>
          ShareHub.xyz/{user.uri}
        </div>
      </Link>
    </div>
  );
}

export default AppBar;
