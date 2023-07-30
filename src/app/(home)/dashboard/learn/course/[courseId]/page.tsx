/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { Checkbox } from "@/components/ui/Checkbox";
import { getLessonByCourseIdFormetted } from "@/lib/getLessons";
import { LessonDto } from "@/types/dto";
import { FC, useEffect, useState } from "react";
import ReactPlayer from "react-player";

interface pageProps {
  params: {
    courseId: string;
  };
}

const page: FC<pageProps> = async ({ params }) => {
  return <></>;
};

export default page;
