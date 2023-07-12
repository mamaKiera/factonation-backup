import { buttonVariants } from "@/components/ui/Button";
import { Progress } from "@/components/ui/progress";
import { getCourses } from "@/lib/getCourse";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = async () => {
  const courses = await getCourses();
  return (
    <>
      <div className="max-w-7xl mx-auto min-h-screen">
        <div className="rounded-lg flex flex-col my-16 gap-6  bg-darkBackground p-6 text-secondary-button">
          <h1 className="text-3xl font-semibold ">Hi Gear</h1>
          <p className="max-w-[474px]">
            ยกฐานข้อมูลขึ้นไปบน Cloud ดูได้บน Desktop และ Mobile
            แค่มีอินเตอร์เน็ตก็เปิดดูข้อมูลได้ทุกที่ทุกเวลา
          </p>
        </div>
        <hr className="my-8 h-[2px] bg-accent  " />
        <h1 className="text-3xl font-semibold text-primary-button my-2">
          Completed
        </h1>
        <p className="text-[#222]">
          Way to go! Here are all the courses you’ve finished.
        </p>
        <div className="flex gap-4 flex-col my-12 mx-8">
          {courses.map((course, i) => {
            return (
              <div
                key={i}
                className="rounded-lg px-6 py-4 bg-secondary-button flex gap-4 items-center justify-between"
              >
                <Link
                  href={`/dashboard/courseOverview/${course.id}`}
                  className="text-lg font-medium w-3/12"
                >
                  {course.courseName}
                </Link>
                <Progress
                  value={20}
                  className="bg-complete h-2 max-w-xl w-2/3"
                />
                <p className="min-w-xl">
                  {course.isCompleted ? "Done" : "In progress"}
                </p>
                <Link
                  href={`/dashboard/learn/course/${i + 1}`}
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "border-[2px] border-primary-button bg-secondary-button"
                  )}
                >
                  {!course.isCompleted ? "Review" : "Start"}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default page;
