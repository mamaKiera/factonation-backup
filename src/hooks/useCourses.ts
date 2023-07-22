import { useQuery } from "@tanstack/react-query";
import { fetchCourses } from "@/api/course/courses";
import axios from "axios";
import { CourseDto } from "@/types/dto";
import { getCourses } from "@/lib/getCourse";

import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useCourses() {
  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/course",
    fetcher
  );

  console.log(data);
  return {
    courses: data,
    isLoading,
    isError: error,
  };
}
