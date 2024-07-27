import { HeroHighlight } from "@/components/ui/background-beams";
import UserNameForm from "../UserNameForm";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import TypewriterEffectSmoothDemo from "../HeroText";
import GoToDashboardButton from "../ui/GoToDashboardButton";
import { Toaster } from "sonner";

async function Home() {
  const sesssion = await getServerSession(authOptions);
  if (!sesssion) {
    // redirect('/')
  }
  return (
    <div className=" h-screen w-full bg-gray-900 relative flex flex-col items-center justify-center antialiased">
      <HeroHighlight>
        <div className="max-w-7xl w-screen p-4 md:mx-6 ">
          <div className="flex flex-col w-full md:w-4/5 ml-2 md:ml-12">
            <div className="relative z-10 text-3xl md:text-7xl font-sans font-extrabold">
              {/* Create Your Personalized Page */}
              <TypewriterEffectSmoothDemo />
            </div>
            <div className="relative z-10 text-2xl  my-3 text-white/50">
              Social Share is a platform that empowers you to build and
              customize your own personal page to showcase your online presence
              and share your content with the world.
            </div>
          </div>
          <div className="relative z-10 mt-[3rem] max-w-screen">
            {/* @ts-ignore */}
            {!sesssion && <UserNameForm user={sesssion?.user} />}
            {sesssion && <GoToDashboardButton />}
          </div>
          <Toaster duration={6000} richColors />
        </div>
      </HeroHighlight>
    </div>
  );
}

export default Home;
