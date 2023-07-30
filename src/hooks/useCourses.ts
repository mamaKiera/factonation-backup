import { useQuery } from "@tanstack/react-query";
import { fetchCourses } from "@/api/course/courses";
import axios from "axios";
import { CourseDto } from "@/types/dto";
import { getCourses } from "@/lib/getCourse";

import useSWR from "swr";
import { host } from "@/types";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useCourses(): {
  courses: { status: string; data: CourseDto[] };
  isLoading: boolean;
  isError: boolean;
} {
  const { data, error, isLoading } = useSWR(`http://${host}/course`, fetcher);
  console.log(data);
  return {
    courses: data,
    isLoading,
    isError: error,
  };
}
