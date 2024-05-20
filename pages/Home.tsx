"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { useSession, signIn } from "next-auth/react";
import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

function Home() {
  const route = useRouter();
  const { status, data: session } = useSession();
  const email = session?.user?.email;
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      // Check if the user is validated
      const checkValidation = async () => {
        try {
          const res = await axios.get(`/api/user`, {
            params: { email },
          });
          if (res.data.validated) {
            return;
          } else {
            router.push("/onboarding");
          }
        } catch (error) {
          console.error("Error checking user validation:", error);
        }
      };

      checkValidation();
    }
  }, [status, session, router]);

  return (
    <div className=" h-screen w-full bg-gray-900 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-7xl mx-auto p-4">
        <div className="relative z-10 text-3xl md:text-7xl  text-white  text-center font-sans font-extrabold">
          Create Your Personalized Page
        </div>
        <div className="relative z-10 text-2xl text-center py-6 text-white/50">
          Social Share is a platform that empowers you to build and customize
          your own personal page to showcase your online presence and share your
          content with the world.
        </div>
        <div className="flex justify-center">
          {status === "authenticated" ? (
            <div
              onClick={() => route.push("/dashboard")}
              className="relative z-10 bg-white px-5 py-3 cursor-pointer rounded-xl font-bold hover:bg-black hover:text-white transition duration-700"
            >
              Go to Dashboard
            </div>
          ) : (
            <div
              onClick={() => signIn("google")}
              className="relative z-10 bg-white px-5 py-3 cursor-pointer rounded-xl font-bold hover:bg-black hover:text-white transition duration-700"
            >
              Get Started
            </div>
          )}
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}

export default Home;
