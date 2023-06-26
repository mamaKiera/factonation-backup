import Navbar from "@/components/Navbar";
import { buttonVariants } from "@/components/ui/Button";
import { HomeIcon, Link } from "lucide-react";
import Image from "next/image";
import { cn } from "./lib/utils";
import HeroText from "@/components/ui/HeroText";
import HeroImage from "@/components/HeroImage";

export default function Home() {
  return (
    <div className="max-w-11/12 mx-auto overflow-clip">
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="flex h-fit rounded-lg">
          <div className="flex lg:flex-col gap-8">
            <HeroText>Watch.</HeroText>
            <HeroText>Learn.</HeroText>
            <HeroText>Grow.</HeroText>
          </div>
          <div className="flex">
            <HeroImage />
            <HeroImage />
          </div>
        </div>
      </main>
    </div>
  );
}
