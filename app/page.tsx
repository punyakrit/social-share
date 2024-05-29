import Appbar from "@/components/Appbar";
import { Button } from "@/components/ui/button";
import Home from "@/components/pages/Home";
import Image from "next/image";
import FooterApp from "@/components/FooterApp";

export default function Page() {
  return (
    <div>
      <Appbar/>
      <Home/>
    </div>
  );
}
