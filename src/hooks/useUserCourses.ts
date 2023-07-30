import { useQuery } from "@tanstack/react-query";
import { fetchCourses } from "@/api/course/courses";
import axios from "axios";
import { CourseDto } from "@/types/dto";
import { getCourses } from "@/lib/getCourse";

import useSWR from "swr";

const fetcher = (url: string) =>
  fetch(url, {
    headers: {
      Authorization: `Bearer ${localStorage.get("token")}`,
    },
    credentials: "include",
  }).then((res) => res.json());

export function useUserCourses(): {
  courses: { status: string; data: CourseDto[] };
  isLoading: boolean;
  isError: boolean;
} {
  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/course/student/enrolled",
    fetcher
  );
  console.log(data);
  return {
    courses: data,
    isLoading,
    isError: error,
  };
}
