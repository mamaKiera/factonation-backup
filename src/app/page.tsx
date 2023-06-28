"use client";
import HeroText from "@/components/ui/HeroText";
import HeroImage from "@/components/HeroImage";
import Shop from "@/components/Shop";
import { useState } from "react";
import { Button, buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import HeroImageContainer from "@/components/HeroImageContainer";

export default function Home() {
  return (
    <div className="min-h-screen max-w-7xl mx-auto">
      <main className="flex justify-between min-h-screen items-center mt-10 px-6">
        <div className="w-fit flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold">Scada Master</h1>
          <h1 className="text-primary-button text-5xl font-bold">
            From Scratch
          </h1>
          <div className="flex items-center gap-2 my-2">
            <Button size="xl" className={cn("bg-primary-button")}>
              Get start
            </Button>
            <Button size="xl" variant="ghost">
              Our Shop
            </Button>
          </div>
        </div>
        <HeroImageContainer />
      </main>
      <div className="flex lg:flex-col gap-8 mt-32 my-4 mr-14"></div>
      <Shop />
    </div>
  );
}
