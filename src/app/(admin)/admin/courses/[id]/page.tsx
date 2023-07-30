"use client";

//import { getCourse } from "@/lib/getCourse";
import * as React from "react";
import { FC } from "react";
import { ScrollArea } from "@/components/ui/ScrollArea";
import { Separator } from "@/components/ui/Separator";
import { PhotoIcon } from "@heroicons/react/24/solid";
import CourseForm, {
  AdminCoursePage,
} from "@/components/adminCoursePage/CourseForm";
import { getCourse } from "@/lib/getCourse";

interface pageProps {
  params: {
    courseId: string;
  };
}

const page = ({ params: { courseId } }: pageProps) => {
  return (
    <>
      <CourseForm page={AdminCoursePage.Edit} />
    </>
  );
};

export default page;
