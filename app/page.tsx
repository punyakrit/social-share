import Appbar from "@/components/Appbar";
import { Button } from "@/components/ui/button";
import Home from "@/pages/Home";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <Appbar/>
      <Home/>
    </div>
  );
}
