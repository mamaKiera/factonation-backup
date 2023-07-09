import { FC } from "react";
import { Button, buttonVariants } from "./ui/Button";
import { Progress } from "./ui/progress";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CourseDashboardProps {
  courseName: string;
  module: number;
  isCompleted: boolean;
}

// TODO: Implement with table component
const CourseDashboard: FC<CourseDashboardProps> = ({
  courseName,
  module,
  isCompleted,
}) => {
  return (
    <>
      <div className="flex items-center justify-around rounded-lg px-10 py-8 bg-secondary-button">
        <h2 className="text-[#222] text-lg font-semibold">{courseName}</h2>
        <Progress value={2} />
        <h2 className="text-[#222]">Jun 19, 2023</h2>
        <Link
          href={`/course/learn/course/${module}`}
          className={cn(
            buttonVariants({ variant: "default" }),
            "text-[#222] bg-[#fff] hover:bg-secondary-button hover:border-primary-button hover:border-2"
          )}
        >
          {isCompleted ? "Start" : "Review"}
        </Link>
      </div>
    </>
  );
};

export default CourseDashboard;
