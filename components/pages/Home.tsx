import { BackgroundBeams } from "@/components/ui/background-beams";
import UserNameForm from "../UserNameForm";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

async function Home() {
  const sesssion = await getServerSession(authOptions)
  return (
    <div className=" h-screen w-full bg-gray-900 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-7xl mx-auto p-4 ">
        <div className="w-4/5">

        <div className="relative z-10 text-3xl md:text-7xl  text-white   font-sans font-extrabold">
          Create Your Personalized Page
        </div>
        <div className="relative z-10 text-2xl  py-6 text-white/50">
          Social Share is a platform that empowers you to build and customize
          your own personal page to showcase your online presence and share your
          content with the world.
        </div>
        </div>
        <div className="relative z-10">
          <UserNameForm user={sesssion?.user}/>
        </div>
        
      </div>
      <BackgroundBeams />
    </div>
  );
}

export default Home;
