import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";

const Custom404: React.FC = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-r from-purple-600 to-blue-500 flex flex-col items-center justify-center text-white antialiased">
      <div className="py-8 px-4 mx-auto max-w-screen-lg lg:py-16 lg:px-6 text-center">
        <h1 className="mb-4 text-9xl font-extrabold">404</h1>
        <p className="mb-4 text-4xl font-semibold">
          Oops! Page Not Found
        </p>
        <p className="mb-8 text-lg font-light">
          Sorry, we can't find that page. You'll find lots to explore on the home page.
        </p>
        <Link href="/">
          <Button className="bg-white text-purple-600 hover:bg-purple-100">Back To Home Page</Button>
        </Link>
      </div>
    </div>
  );
};

export default Custom404;
