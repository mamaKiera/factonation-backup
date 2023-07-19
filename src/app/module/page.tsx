import { ArrowRight } from "lucide-react";
import ModuleCard from "./ModuleCard";
import { IBM_Plex_Sans_Thai } from "next/font/google";

const imb_plex_sans_thai = IBM_Plex_Sans_Thai({
  subsets: ["thai"],
  weight: ["100", "200", "400", "600"],
});

import { FC } from "react";
import { Button } from "@/components/ui/Button";
import { getCourse, getCourses } from "@/lib/getCourse";

interface pageProps {}

const page: FC<pageProps> = async () => {
  const courses = await getCourses();
  return (
    <div className="imb_plex_sans_thai">
      {/* <ModuleCard /> */}
      <div className="flex justify-center my-10">
        <div className="flex flex-col gap-10 w-9/12 ">
          <div className="flex gap-2">
            <p className="text-3xl font-black">|</p>
            <p className="text-4xl font-bold">แนะนำคอร์สเรียน</p>
          </div>

          {courses.map((course, i) => {
            return (
              <div className="flex flex-col gap-6 mx-auto" key={i}>
                <div className="flex gap-5 rounded-xl w-[920px] h-[340px] bg-neutral-100 px-6 items-center drop-shadow-md ">
                  <div>
                    {/* <Image
                    src={course.image}
                    alt="Industry image"
                    className="flex items-center rounded-xl h-[250px] w-[480px]"
                  /> */}
                  </div>
                  <div className="flex flex-col w-[710px] h-[320px] p-2 gap-3 justify-center">
                    <div className="flex flex-col gap-2">
                      <p className="text-xs text-primary-button">
                        {course.courseName}
                      </p>
                      <p className="text-xl font-semibold">
                        {course.courseName}
                      </p>
                      <p className="text-sm text-stone-600">{course.details}</p>
                      <p className="text-xs font-semibold">
                        จำนวนวิดีโอ {course.lessons.length} วิดีโอ
                      </p>
                    </div>
                    <div className="flex gap-10 justify-between border-t border-primary-button py-1 ">
                      <p className="text-xs font-semibold my-2  bg-neutral-100">
                        {4000}
                      </p>
                      <div className="flex items-center gap-0">
                        <Button className="text-xs font-semibold bg-neutral-100">
                          ดูรายละเอียดคอร์์ส
                        </Button>
                        <ArrowRight size={10} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
