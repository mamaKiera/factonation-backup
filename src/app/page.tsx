"use client";
import HeroText from "@/components/ui/HeroText";
import Shop from "@/components/Shop";
import { useState } from "react";
import { Button, buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="min-h-screen max-w-7xl mx-auto">
      <main className="flex justify-between min-h-screen items-center mt-10 px-6"></main>
      <div className="flex lg:flex-col gap-8 mt-32 my-4 mr-14"></div>
      <Shop />
    </div>
  );
}
