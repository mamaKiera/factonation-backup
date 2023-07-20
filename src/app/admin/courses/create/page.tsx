"use client";

//import { getCourse } from "@/lib/getCourse";
import * as React from "react"
import { FC } from "react";
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { PhotoIcon } from '@heroicons/react/24/solid'
import CourseForm from "@/components/adminCoursePage/CourseForm";
import { getCourse } from "@/lib/getCourse";

interface pageProps {
  params: {
    courseId: string;
  };
}
  
const page = ({ params: { courseId } }: pageProps) => { 
  return (
    <>
      <CourseForm />
    </>
  );
};
  
  export default page;