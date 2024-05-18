"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";

function Home() {
  return (
    <div className="h-screen w-full bg-gray-900 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-7xl mx-auto p-4">
        <div className="relative z-10 text-3xl md:text-7xl  text-white  text-center font-sans font-bold">
          Social Share: Your Premier Destination for Seamless Link Sharing
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}

export default Home;
