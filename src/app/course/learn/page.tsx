/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { buttonVariants } from "@/components/ui/Button";
import { getCourses } from "@/lib/getCourse";
import { cn } from "@/lib/utils";
import { CourseDto } from "@/types/dto";
import Link from "next/link";
import { FC, useState } from "react";

const page: FC = async () => {
  const courses = await getCourses();
  console.log(courses);
  const m = courses.map((_, i) => i);
  return (
    <div className="h-[379px] py-24 opacity-90 text-[#222]">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl my-2">Select your course</h1>
        <div className="">
          {courses.map((course, i) => (
            <Link
              href={`/course/learn/course/${i + 1}`}
              className={cn(buttonVariants({ size: "lg", variant: "ghost" }))}
              key={course.id}
            >
              {course.courseName}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
