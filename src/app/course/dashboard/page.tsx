import CourseDashboard from "@/components/CourseDashboard";
import { Button } from "@/components/ui/Button";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <div className="max-w-7xl mx-auto min-h-screen">
        <div className="rounded-lg flex flex-col my-16 gap-6  bg-darkBackground p-6">
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
        <div className="flex gap-4 flex-col my-12">
          <CourseDashboard />
          <CourseDashboard />
          <CourseDashboard />
        </div>
      </div>
    </>
  );
};

export default page;
