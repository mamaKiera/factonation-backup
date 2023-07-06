import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="h-[379px] py-24 opacity-90 text-[#222]">
      <div className="max-w-7xl mx-auto">
        <div className="">
          <h1 className="text-5xl font-bold text-center">
            หนทางสู่ FACTORY 4.0
          </h1>
          <Link
            href="/course/progress"
            className={cn(buttonVariants({ size: "lg", variant: "ghost" }))}
          >
            Progress
          </Link>
          <Link
            href="/course/dashboard"
            className={cn(buttonVariants({ size: "lg", variant: "ghost" }))}
          >
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
