import { LessonDto } from "@/types/dto";

export async function getAllLesson(): Promise<LessonDto[]> {
  const res = await fetch(`http://localhost:8000/lesson`);
  const lessonData = await res.json();
  return lessonData.data;
}

export async function getAllLessonFormatted() {
  const res = await fetch(`http://localhost:8000/lesson/moduleAndweek`);
  const lessonData = await res.json();
  return lessonData.data;
}

export async function getLessonByModuleFormatted(module: number) {
  const res = await fetch(
    `http://localhost:8000/lesson/moduleAndweek/${module}`
  );
  const lessonData = await res.json();
  console.log(lessonData);
  return lessonData.data;
}
