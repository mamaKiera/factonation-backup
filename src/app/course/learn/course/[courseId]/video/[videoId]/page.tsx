"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { getLessonByModuleFormatted } from "@/lib/getLessons";
import { LessonDto } from "@/types/dto";
import { FC } from "react";
import ReactPlayer from "react-player";

interface pageProps {
  params: {
    videoId: string;
    courseId: number;
  };
}

const page: FC<pageProps> = async ({ params: { videoId, courseId } }) => {
  const lessons = await getLessonByModuleFormatted(courseId);
  let url: string = "";
  let title: string = "";
  let desc: string = "";
  lessons.forEach((lesson: any) => {
    lesson.forEach((week: any) => {
      if (week.id == videoId) {
        url = week.videoUrl;
        title = week.title;
        desc = week.desc;
        console.log(url);
        // console.log(videoId);
      }
    });
  });

  return (
    <div className="flex gap-4 mt-16 flex-col text-[#222] ">
      <div className="flex items-center gap-4">
        <h1 className="text-3xl font-semibold my-2">{title}</h1>
        <p>{desc}</p>
      </div>
      <ReactPlayer controls url={url} />
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <label htmlFor="terms" className="text-md font-medium leading-none">
          Mark as completed
        </label>
      </div>
    </div>
    // <div>{url}</div>
  );
};

export default page;
