import { FC } from "react";
import { Button, buttonVariants } from "./ui/Button";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Navbar: FC = () => {
  return (
    <div className="fixed top-0 inset-x-0 h-fit z-[10] py-4 bg-text opacity-95 bg-blend-luminosity">
      <div className="container h-full mx-auto flex items-center justify-between gap-2">
        <div className="flex justify-start gap-20">
          <Link href="/">
            <h1 className="hidden font-bold text-zinc-700 text-2xl md:block">
              Factonation
            </h1>
          </Link>
          <div className="hidden md:flex md:items-center md:justify-start md:gap-8">
            <Link href="/schdule" className="">
              Schdule
            </Link>
            <Link href="/blog">Blog</Link>
            <Link href="/store">Store</Link>
          </div>
        </div>
        <div className="flex items-center">
          <Link className={cn(buttonVariants)} href="/sign-in">
            Login
          </Link>
          <Button className="bg-primary-button">Free Trial</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;