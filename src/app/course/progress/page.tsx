"use client";
import { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { AvatarFallback } from "@/components/ui/avatar";
import {
  CheckCheckIcon,
  CircleDot,
  ClipboardList,
  ClipboardListIcon,
  Code2Icon,
  YoutubeIcon,
} from "lucide-react";

import {
  ThisCourseIncludes,
  ThisCourseIndlues,
  courseDetails,
  lessonLists,
  whatYourWillLearn,
} from "data";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      {/* header */}
      <div className="bg-[#0B0E0C] h-[379px] py-24 opacity-90">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-8 text-secondary-button">
            <h1 className="text-5xl font-semibold">C# & .NET Fundamentals</h1>
            <p className="text-lg font-medium">
              Way to go! Here are all the courses you’ve finished.
            </p>
            <Button
              size={"xl"}
              className={cn("bg-secondary-button", "text-[#222]", "w-fit")}
            >
              Go to course
            </Button>
          </div>
        </div>
      </div>
      {/* details */}
      <div className="max-w-5xl mx-auto py-12">
        <div className="rounded-xl border-[1px] p-4 border-primary-button">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="59"
                height="67"
                viewBox="0 0 59 67"
                fill="none"
              >
                <path
                  d="M29.5 0L58.5118 16.75V50.25L29.5 67L0.48815 50.25V16.75L29.5 0Z"
                  fill="#0AC5A8"
                />
              </svg>
              <div className="flex flex-col px-4">
                <h1 className="text-[#222] font-semibold">
                  C# & .NET Fundamentals
                </h1>
                <p className="text-[#222] text-md">
                  By completing this course, you&apos;ll be on your way to
                  earning an Scada Developer - Associate certification.
                </p>
              </div>
            </div>
            <Button className="bg-primary-button min-w-fit">
              View project
            </Button>
          </div>
        </div>
        <div className="flex justify-between text-[#222] min-h-screen">
          <div className="flex flex-col">
            <div className="flex flex-col py-4">
              <h1 className="font-bold text-2xl py-2">Details</h1>
              {courseDetails.map((detail, i) => {
                return (
                  <p className="text-xl" key={i}>
                    {detail}
                  </p>
                );
              })}
            </div>
            <div className="flex flex-col py-4">
              <h1 className="font-bold text-2xl py-2">
                What you&apos;ll learn
              </h1>
              {whatYourWillLearn.map((e, i) => {
                return (
                  <li className="text-xl" key={i}>
                    {e}
                  </li>
                );
              })}
            </div>
            <div className="flex flex-col py-4">
              <h1 className="font-bold text-2xl py-2">Prerequisites</h1>
              <li className="text-xl">C#</li>
              <li className="text-xl">.NET framework</li>
            </div>
            <div className="flex flex-col py-4 ">
              <h1 className="font-bold text-2xl py-2">Instructor</h1>
              <div className="flex gap-4 items-center">
                <Avatar className="w-12 h-12">
                  <AvatarImage
                    className="rounded-full"
                    src="https://github.com/macgeargear.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback className="bg-primary-button">
                    G
                  </AvatarFallback>
                </Avatar>
                <p className="text-xl">Mr. gear</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col py-2 ml-8">
              <h1 className="font-bold text-2xl py-9">Lesson List</h1>
              <div className="rounded-xl flex flex-col gap-3 text-xl my-2 p-8 border-[1px] border-primary-button">
                {lessonLists.map((lesson, i) => {
                  return <p key={i}>{lesson}</p>;
                })}
              </div>
            </div>
            <div className="flex flex-col py-2 ml-8 min-w-[349px]">
              <h1 className="font-bold text-2xl py-9">Thie course includes</h1>
              <div className="rounded-xl flex flex-col gap-3 text-xl my-2 p-8 border-[1px] border-primary-button">
                {ThisCourseIncludes.map((e, i) => {
                  return (
                    <div className="flex items-center gap-8" key={i}>
                      <e.icon />
                      <p className="text-xl">{e.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
