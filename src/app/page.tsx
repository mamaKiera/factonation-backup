"use client";
import HeroText from "@/components/ui/HeroText";
import HeroImage from "@/components/HeroImage";
import Shop from "@/components/Shop";
import { useState } from "react";

export default function Home() {
  return (
    <div className="overflow-clip min-h-screen">
      <main className="flex min-h-screen flex-col items-center mt-24">
        <div className="flex max-lg:flex-col h-fit rounded-lg">
          <div className="flex lg:flex-col gap-8 mt-32 my-4 mr-14">
            <HeroText>Watch.</HeroText>
            <HeroText>Learn.</HeroText>
            <HeroText>Grow.</HeroText>
          </div>
          <div className="flex gap-4">
            <HeroImage isFirstImage={true} />
            <HeroImage />
            <HeroImage />
          </div>
        </div>
        <Shop />
      </main>
    </div>
  );
}
