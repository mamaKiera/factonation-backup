import { CourseDto } from "@/types/dto";

export async function getCourses(): Promise<CourseDto[]> {
  const res = await fetch("http://localhost:8000/course");
  const coursesData = await res.json();
  return coursesData.data;
}

export async function getCourse(id: string): Promise<CourseDto> {
  const res = await fetch(`http://localhost:8000/course/${id}`);
  const courseData = await res.json();
  return courseData.data;
}
