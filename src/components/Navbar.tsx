"use client";

import { FC, useState } from "react";

import { Button, buttonVariants } from "./ui/Button";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ScrollLink from "./ScrollLink";

import { AlignJustify } from 'lucide-react';
import { BookMarked } from 'lucide-react';
import { Newspaper } from 'lucide-react';
import { BadgeHelp } from 'lucide-react';
import { DollarSign } from 'lucide-react';
import { X } from 'lucide-react';
import { motion } from "framer-motion";


const Navbar: FC = () => {
  const [open, setOpen] = useState<boolean>(false);


  return (
    <div className="sticky top-0 z-[10]">
    <div className="sticky top-0 inset-x-0 h-fit z-[10] py-4 bg-[#0B0E0C] text-background backdrop-blur-lg  ">
      <div className="container h-full mx-auto flex items-center justify-between gap-2">
        <div className="flex justify-start gap-12 items-center">
          <Link href="/">
            <h1 className=" font-bold text-white text-2xl md:block">
              Factonation
            </h1>
          </Link>

          <div className="hidden md:flex md:items-center md:justify-start md:gap-8">
            <Link href="/dashboard">คอร์สเรียน</Link>

            <Link href="/#price-section" className="scroll-smooth">
              ราคาคอร์ส
            </Link>
            <Link href="/store">บทความ</Link>
            <ScrollLink href="/#question-section">คำถามที่พบบ่อย</ScrollLink>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {isLoggedIn ? (
            <>
              <Avatar>
                <AvatarImage></AvatarImage>
                <AvatarFallback>{username![0]}</AvatarFallback>
              </Avatar>
              <Link
                href={"/"}
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "bg-secondary-button text-[#222]"
                )}
              >
                Log out
              </Link>
            </>
          ) : (
            <>
              <Link
                className={cn(buttonVariants({ variant: "ghost" }))}
                href="/login"
              >
                เข้าสู่ระบบ
              </Link>
              <Link
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "bg-secondary-button text-[#222]"
                )}
                href="/register"
              >
                ลงทะเบียน
              </Link>
            </>
          )}

        </div>
        <button className="lg:hidden" >
        <AlignJustify type="button" className={`${open ? ("hidden"):("w-[25px] h-[25px]") }`} onClick={() => setOpen(!open)}  />
          <X type="button" className={`${open ? ("w-[25px] h-[25px] rotate-[360deg] duration-500"):("hidden") }`} onClick={() => setOpen(!open)}/>
        </button>
      </div>
    </div>
    <div
      className={`${open ? ("lg:hidden flex left-0 fixed h-full w-2/4 sm:w-2/5  z-10 "):("hidden") }`}>
      <div className={`bg-[#1c1f1d] text-background backdrop-blur-lg w-full h-screen ease-in-out duration-500 ${open? "translate-x-100" : "-translate-x-0"} `} >
        <div className="flex flex-col gap-4 mx-7 py-6">
            <div className="flex gap-2 items-center" onClick={() => setOpen(!open)}>
               <BookMarked size={15} />
               <Link href="/course">คอร์สเรียน</Link>
            </div>
            <div className="flex gap-2 items-center" onClick={() => setOpen(!open)} >
               <DollarSign size={15} />
               <Link href="/#price-section">ราคาคอร์ส</Link> 
            </div>
            <div className="flex gap-2 items-center" onClick={() => setOpen(!open)}>
               <Newspaper size={15} />
               <p>บทความ</p>
            </div>
            <div className="flex gap-2 items-center" onClick={() => setOpen(!open)}>
               <BadgeHelp size={15} />
               <Link href="/#question-section">คำถามที่พบบ่อย</Link>
            </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
