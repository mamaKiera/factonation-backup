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

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      {/* header */}
      <div className="bg-[#0B0E0C] h-[379px] py-24 opacity-90">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-8">
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
              <p className="text-xl">updated Jun 23, 2023</p>
              <p className="text-xl">10 lessons</p>
            </div>
            <div className="flex flex-col py-4">
              <h1 className="font-bold text-2xl py-2">
                What you&apos;ll learn
              </h1>
              <li className="text-xl">
                ระยะเวลารวมประมาณ 4 เดือน โดยรูปแบบการเรียนจะเป็น VDO On-Demand
                สัปดาห์ละ 2 วิดีโอ
              </li>
              <li className="text-xl">
                กลุ่ม Private ผ่าน Discord
                สำหรับการพูดคุยและถามตอบระหว่างอาจารย์และนักเรียนที่เรียนในคอร์สเดียวกัน
              </li>
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
                <p>Introduction</p>
                <p>Environment Setup</p>
                <p>C# & .NET</p>
                <p>Architecture of .NET Applications</p>
                <p>Variables & Constants</p>
                <p>Types</p>
                <p>Type Conversion</p>
                <p>Final Project (Solutino)</p>
              </div>
            </div>
            <div className="flex flex-col py-2 ml-8 min-w-[349px]">
              <h1 className="font-bold text-2xl py-9">Thie course includes</h1>
              <div className="rounded-xl flex flex-col gap-3 text-xl my-2 p-8 border-[1px] border-primary-button">
                <div className="flex items-center gap-8">
                  <YoutubeIcon />
                  <p className="text-xl">Videos (999 hr total)</p>
                </div>
                <div className="flex items-center gap-8">
                  <CheckCheckIcon />
                  <p className="text-xl">multiple choice questions</p>
                </div>
                <div className="flex items-center gap-8">
                  <ClipboardListIcon />
                  <p className="text-xl">tasks</p>
                </div>
                <div className="flex items-center gap-8">
                  <Code2Icon />
                  <p className="text-xl">code challenges</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
