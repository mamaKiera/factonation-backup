/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { getLessonByModuleFormatted } from "@/lib/getLessons";
import { LessonDto } from "@/types/dto";
import { useRouter } from "next/navigation";
import { FC } from "react";
import ReactPlayer from "react-player";

interface pageProps {
  params: {
    courseId: string;
  };
}

const page: FC<pageProps> = async ({ params }) => {
  const router = useRouter();
  const lessons: LessonDto[][] = await getLessonByModuleFormatted(
    Number(params.courseId)
  );
  return (
    <></>
    // <div className="flex gap-4 mt-16 flex-col text-[#222] ">
    //   <div className="flex items-center gap-4">
    //     <h1 className="text-3xl font-semibold my-2">{lessons[0][0].title}</h1>
    //     <p>{lessons[0][0].desc}</p>
    //   </div>
    //   <ReactPlayer controls url={lessons[0][0].videoUrl} />
    //   <div className="flex items-center space-x-2">
    //     <Checkbox id="terms" />
    //     <label htmlFor="terms" className="text-md font-medium leading-none">
    //       Mark as completed
    //     </label>
    //   </div>
    // </div>
  );
};

export default page;
