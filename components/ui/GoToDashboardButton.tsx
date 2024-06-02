"use client";
import React from "react";
import MagicButton from "./MagicButton";
import { useRouter } from "next/navigation";

function GoToDashboardButton() {
    const route = useRouter()
  return (
    <div onClick={()=>{
        route.push('/dashboard')
    }}>
      <MagicButton title="Go to Dashboard" ></MagicButton>
    </div>
  );
}

export default GoToDashboardButton;
