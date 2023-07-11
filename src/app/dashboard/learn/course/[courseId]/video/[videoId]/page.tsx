/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { getLessonByModuleFormatted } from "@/lib/getLessons";
import { LessonDto } from "@/types/dto";
import { FC, useEffect, useState } from "react";
import ReactPlayer from "react-player";

interface pageProps {
  params: {
    videoId: string;
    courseId: number;
  };
}

async function toggleLesson(id: string) {
  const res = await fetch(`http://localhost:8000/lesson/toggle/${id}`, {
    method: "POST",
  });
  const status = await res.json();
  alert(status);
  console.log(status);
}

const page: FC<pageProps> = ({ params: { videoId, courseId } }) => {
  const [lessons, setLessons] = useState<LessonDto[][]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  // const lessons = await getLessonByModuleFormatted(courseId);
  useEffect(() => {
    const fetLessons = async () => {
      setLoading(true);
      const _lessons = await getLessonByModuleFormatted(courseId);
      setLessons(_lessons);
      setLoading(false);
    };
    fetLessons();
  }, [courseId]);

  let url: string = "";
  let id: string = "";
  let title: string = "";
  let desc: string = "";

  lessons.forEach((lesson: any) => {
    lesson.forEach((week: any) => {
      if (week.id == videoId) {
        url = week.videoUrl;
        title = week.title;
        desc = week.desc;
        id = week.id;
      }
    });
  });

  if (loading) return <div className="text-[#222]"></div>;
  return (
    <div className="flex gap-4 mt-16 flex-col items-center text-[#222] w-full">
      <div className="flex items-center justify-center flex-col gap-4 border-accent border-b-[2px] w-full">
        <h1 className="text-3xl font-semibold my-2">{title}</h1>
        <p>{desc}</p>
      </div>
      <ReactPlayer controls url={url} style={{ width: "full" }} />
      <div className="flex align-end space-x-2">
        <Checkbox
          id="terms"
          onClick={() => {
            toggleLesson(id);
          }}
        />
        <label htmlFor="terms" className="text-md font-medium leading-none">
          Mark as completed
        </label>
      </div>
    </div>
  );
};

export default page;
