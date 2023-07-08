/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { getCourse } from "@/lib/getCourse";
import { CourseDto, LessonDto } from "@/types/dto";
import { lessonLists } from "data";
import { FC, ReactNode, useEffect, useState } from "react";
import ReactHtmlParser from "react-html-parser";
import ReactPlayer from "react-player";

interface pageProps {
  params: {
    courseId: string;
  };
}

function toUrl(tag: string): string {
  const start = tag.indexOf("src") + 5;
  let url = "";
  for (let i = start; i < tag.length; i++) {
    if (tag[i] === '"') break;
    url += tag[i];
  }
  return url;
}

function renderUrl(url: string): ReactNode {
  return <h1 className="text-[#222]">{url}</h1>;
}

const page: FC<pageProps> = async ({ params: { courseId } }: pageProps) => {
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [title, setTitle] = useState<string>();
  const [val, setVal] = useState(0);

  const course = await getCourse(courseId);
  return (
    <div className="h-full">
      <div className=" flex gap-4 h-full  ">
        <div className="mt-32  w-[380px] flex gap-8 flex-col text-[#222] border-r-accent border-r-[1px] mx-4 p-2">
          {course.lessons.map((lesson, i) => {
            return (
              <h1
                key={i}
                className="text-xl hover:bg-secondary-button hover:p-2 ease-in-out duration-300 rounded-xl"
                onClick={() => {
                  console.log(lesson.title);
                  setVideoUrl(() => toUrl(lesson.tag));
                  setTitle(lesson.title);
                }}
              >
                {lesson.title}
              </h1>
            );
          })}
        </div>
        <div className="flex mt-16 flex-col text-[#222]">
          <div className="flex items-center gap-4">
            <p>4 min</p>
            <h1 className="text-3xl font-semibold"> {videoUrl}</h1>
            <p>{val}</p>
          </div>
          {/* <div className="w-[800px] h-[560px] rounded-lg bg-accent"></div> */}
          {/* <iframe
            src="https://player.vimeo.com/video/738671414?h=3b018417ad&badge=0&autopause=0&player_id=0&app_id=58479/embed"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="w-[900px] h-[600px]"
          ></iframe> */}
          <ReactPlayer
            controls
            url={
              "https://player.vimeo.com/video/738671414?h=3b018417ad&badge=0&autopause=0&player_id=0&app_id=58479/embed"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default page;

{
  /* <iframe
src="https://player.vimeo.com/video/738671414?h=3b018417ad&badge=0&autopause=0&player_id=0&app_id=58479/embed"
allow="autoplay; fullscreen; picture-in-picture"
allowFullScreen
style={{
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%;",
}}
></iframe> */
}
