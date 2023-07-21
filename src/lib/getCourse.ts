import { CourseDto, CourseWithLessonDto } from "@/types/dto";

export async function getCourses(): Promise<CourseDto[]> {
  const res = await fetch("http://localhost:8000/course");
  const coursesData = await res.json();
  return coursesData.data;
}

export async function getCourse(id: string): Promise<CourseWithLessonDto> {
  const res = await fetch(`http://localhost:8000/course/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-type": "Application/json",
    },
  });
  const courseData = await res.json();
  return courseData.data;
}
