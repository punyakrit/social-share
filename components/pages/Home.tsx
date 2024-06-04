import { BackgroundBeams } from "@/components/ui/background-beams";
import UserNameForm from "../UserNameForm";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import TypewriterEffectSmoothDemo from "../HeroText";

async function Home() {
  const sesssion = await getServerSession(authOptions)
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col lg:flex  justify-center items-center antialiased max-w-7xl">
      <div className="max-w-7xl mx-auto p-4 flex flex-col items-center  w-full h-full">
        <div className="lg:w-full max-w-7xl  ">
          <div className="text-3xl font-sans font-extrabold">
            {/* Create Your Personalized Page */}
            <TypewriterEffectSmoothDemo/>
          </div>
          <div className="text-lg text-left md:text-2xl my-3 text-white/50">
            Social Share is a platform that empowers you to build and customize
            your own personal page to showcase your online presence and share your
            content with the world.
          </div>
        </div>
        <div className="mt-8 max-w-7xl w-full ">
          <UserNameForm user={sesssion?.user}/>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}

export default Home;
