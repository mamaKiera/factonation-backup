import { FC } from "react";
import { Button, buttonVariants } from "./ui/Button";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar: FC = () => {
  return (
    <div className="sticky top-0 inset-x-0 h-fit z-[10] py-4 bg-[#0B0E0C] text-background opacity-90 ">
      <div className="container h-full mx-auto flex items-center justify-between gap-2">
        <div className="flex justify-start gap-12 items-center">
          <Avatar>
            <AvatarImage src="" alt="@shadcn" />
            <AvatarFallback className="bg-primary-button">F</AvatarFallback>
          </Avatar>
          <Link href="/">
            <h1 className="hidden font-bold text-zinc-700 text-2xl md:block">
              Factonation
            </h1>
          </Link>
          <div className="hidden md:flex md:items-center md:justify-start md:gap-8">
            <Link href="/course">courses</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/store">Blog</Link>
            <Link href="/store">Documentation</Link>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Link
            className={cn(buttonVariants({ variant: "ghost" }))}
            href="/sign-in"
          >
            Login
          </Link>
          <Link
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "bg-secondary-button text-[#222]"
            )}
            href="/"
          >
            Free Trial
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
