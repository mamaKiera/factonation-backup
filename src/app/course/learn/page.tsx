import { buttonVariants } from "@/components/ui/Button";
import { getCourses } from "@/lib/getCourse";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = async ({}) => {
  const courses = await getCourses();
  return (
    <div className="h-[379px] py-24 opacity-90 text-[#222]">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl my-2">Select your course</h1>
        <div className="">
          {courses.map((course, i) => {
            return (
              <Link
                href={`/course/learn/${course.id}`}
                className={cn(buttonVariants({ size: "lg", variant: "ghost" }))}
                key={i}
              >
                {course.courseName}
              </Link>
            );
          })}

          <div style={{ padding: "56.25% 0 0 0;", position: "relative" }}></div>
        </div>
      </div>
    </div>
  );
};

export default page;
