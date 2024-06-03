// pages/404.tsx
import React from "react";
import Link from "next/link";
// import RootLayout from "../lay";
import { Button } from "../ui/button";

export const Custom404: React.FC = () => {
  return (
    <div className="h-screen w-full bg-gray-900 relative flex flex-col items-center justify-center antialiased">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500 text-white">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            Something's missing.
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.
          </p>

          <Link href={'/'} >
            <Button className="border">Back To Home Page</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
