"use client"

import { SessionProvider } from "next-auth/react"
import { ReactNode } from "react";
import { HeroHighlight } from "@/components/ui/background-beams";

export const Providers = ({ children }: { children: ReactNode }) => {
    return (
      <SessionProvider>
       <HeroHighlight>
        {children}
        </HeroHighlight>
      </SessionProvider>
    );
  };