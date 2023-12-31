import { host } from "@/types";
import { CourseDto } from "@/types/dto";

export async function fetchCourses(): Promise<CourseDto[]> {
  const res = await fetch(`${host}/course`);
  const coursesData = await res.json();
  return coursesData.data;
}
