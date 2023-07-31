import { host } from "@/types";
import { CourseDto, CourseStatusDto, CourseWithLessonDto } from "@/types/dto";
import { headers } from "next/dist/client/components/headers";

export async function getCourses(): Promise<CourseDto[]> {
  const res = await fetch(`${host}/course`);
  const coursesData = await res.json();
  return coursesData.data;
}

export async function getCourse(id: string): Promise<CourseWithLessonDto> {
  const res = await fetch(`${host}/course/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-type": "Application/json",
    },
  });
  const courseData = await res.json();
  return courseData.data;
}

export async function getCourseStatus(
  studentId: string,
  courseId: string
): Promise<CourseStatusDto> {
  const res = await fetch(`${host}/lesson/status/course`, {
    method: "POST",
    body: JSON.stringify({ studentId, courseId }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const courseStatusData = await res.json();
  return courseStatusData.data;
}
