/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { Button } from "@/components/ui/Button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import { getCourse, getCourses } from "@/lib/getCourse";
import { getLessonByModuleFormatted } from "@/lib/getLessons";
import { CourseDto, LessonDto } from "@/types/dto";
import { lessonLists } from "data";
import { Trophy, TrophyIcon } from "lucide-react";
import { FC, Key, ReactNode, useEffect, useState } from "react";
import ReactHtmlParser from "react-html-parser";
import ReactPlayer from "react-player";

interface pageProps {
  params: {
    courseId: number;
    // module: number;
  };
}

// export async function generateStaticParams() {
//   const courses = await getCourses();

//   return courses.map((course, i) => ({
//     // courseId: course.id,
//     module: i + 1,
//   }));
// }

const page: FC<pageProps> = async ({ params }: pageProps) => {
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [title, setTitle] = useState<string>("Introduction");

  console.log(params);
  const lessons: LessonDto[][] = await getLessonByModuleFormatted(
    params.courseId
  );
  return (
    <div className="flex gap-4 h-full bg-background">
      <div className="bg-[#fff] w-[380px] max-h-screen overflow-scroll flex gap-2 flex-col  justify-start text-[#222] border-r-secondary-button border-r-[1px]">
        <div className="p-4 border-secondary-button border-b ">
          <h1 className="font-medium text-xl">{title}</h1>
          <div className="flex items-center">
            <Progress value={20} className="bg-primary-button h-1" />
            <Trophy
              className=" bg-secondary-button p-2 rounded-lg mx-2"
              size={32}
            />
          </div>
          <p>0% Complete</p>
        </div>
        <div className="">
          {lessons.map((lesson, i) => {
            const completedLesson = lesson.filter(
              (l) => l.isLessonCompleted
            ).length;
            return (
              <Accordion
                key={i}
                type="multiple"
                className="border-secondary-button border-b mx-auto decoration-none no-scrollbar"
              >
                <AccordionItem
                  key={i}
                  value={String(lesson.length)}
                  className="border-none mx-6"
                >
                  <AccordionTrigger className="underline-none">
                    <div className="flex items-center gap-8">
                      <h1 className="font-semibold">{`Week ${i + 1}`}</h1>
                      <p className="py-1 text-md px-2 rounded-2xl bg-secondary-button border-accent border">
                        {`${completedLesson} / ${lesson.length}`}
                      </p>
                    </div>
                  </AccordionTrigger>
                  <div className="flex flex-col my-2 rounded-lg">
                    {lesson.map((l: LessonDto) => {
                      return (
                        <AccordionContent
                          key={l.id}
                          className="hover:bg-secondary-button rounded-lg ease-in-out duration-200"
                        >
                          {l.title}
                        </AccordionContent>
                      );
                    })}
                  </div>
                </AccordionItem>
              </Accordion>
            );
          })}
        </div>
      </div>
      <div className="flex mt-16 flex-col text-[#222] ">
        <div className="flex items-center gap-4">
          <p>4 min</p>
          <h1 className="text-3xl font-semibold">{title}</h1>
        </div>
        <ReactPlayer
          controls
          url={
            "https://player.vimeo.com/video/738671414?h=3b018417ad&badge=0&autopause=0&player_id=0&app_id=58479/embed"
          }
        />
        {/* <div className=""></div> */}
      </div>
    </div>
  );
};

export default page;
