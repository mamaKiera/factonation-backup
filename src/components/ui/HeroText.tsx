import React from "react";

export default function HeroText({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="w-fit text-5xl font-bold hover:underline hover:cursor-pointer decoration-4 underline-offset-8 decoration-primary-button mx-2 hover:scale-110 hover:pointer text-white hover:bg-lightGray hover:text-base-200 hover:p-2 rounded-xl ease-in-out duration-300">
      {children}
    </h1>
  );
}
