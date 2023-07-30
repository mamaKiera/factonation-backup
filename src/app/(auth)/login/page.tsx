"use client";
// import { Metadata } from "next";
import Image from "next/image";
import loginImage from "../../../../public/IMG_1798.webp";
import { UserAuthForm, UserAuthFormPage } from "@/components/UserAuthForm";
import React from "react";
import { FC } from "react";

const Page: FC = () => {
  return (
    <div className="flex min-h-screen flex-1">
      <UserAuthForm page={UserAuthFormPage.LogIn} />
      <div className="relative hidden w-0 flex-1 lg:block">
        <Image
          className="absolute inset-0 h-full w-full object-cover"
          src={loginImage}
          alt=""
        />
      </div>
    </div>
  );
};

export default Page;
