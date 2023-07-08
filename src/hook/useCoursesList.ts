import { CourseListHook } from "@/types/courseList.hook";
import { CourseDto } from "@/types/dto";
import { useEffect, useState } from "react";

export const useCourseList = (): CourseListHook => {
  const [data, setData] = useState<CourseDto[]>([]);
  const [error, setError] = useState<null | unknown>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchCourse = async () => {
      setLoading(true);
      try {
        const courses = await fetch("http://localhost:8000/course");
        const coursesData = await courses.json();
        console.log(coursesData);
        setData(coursesData.data);
        setError(false);
        setLoading(false);
      } catch (err) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCourse();
  });

  return {
    data,
    setData,
    status: {
      error,
      loading,
      ready: error == null && !loading && data != null,
    },
  };
};
