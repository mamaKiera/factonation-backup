export interface CourseDto {
  id: string;
  courseName: string;
  details: string;
  prerequisites: string[];
  quizes: string[];
  isCompleted: boolean[];
  instructorId: string;
  lessons: {
    id: string;
    title: string;
    week: number;
    desc: string;
    quizes: string[];
    module: number;
    video: number;
    tag: string;
    courseId: string;
  }[];
  students: string[];
  instructor: {
    id: string;
    name: string;
  };
}

export interface LessonDto {
  id: string;
  title: string;
  week: number;
  desc: string;
  quizes: string[];
  module: number;
  video: number;
  tag: string;
  courseId: string;
}
