"use client";
import { LessonDto } from "@/types/dto";
import { Dispatch, FC, FormEvent, SetStateAction, useState } from "react";
import { Label } from "./ui/label";
import { Button } from "./ui/Button";

interface AddLessonFormProps {
  lessons: LessonDto;
  setLessons: Dispatch<SetStateAction<LessonDto>>;
}

/*
  id: string;
  title: string;
  week: number;
  desc: string;
  quizes: string[];
  module: number;
  episode: number;
  videoUrl: string;
*/

const submit = (event: FormEvent) => {};

const AddLessonForm: FC<AddLessonFormProps> = ({ lessons, setLessons }) => {
  const [title, setTitle] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  return (
    <form onSubmit={submit} className="flex items-center">
      <div className="">
        <Label htmlFor="lessonName">ชื่อบทเรียน</Label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          id="lessonName"
          placeholder="Javascript expert"
          className="rounded-lg bg-stone-100 p-2 mt-1 mb-3"
        />
      </div>
      <div className="">
        <Label htmlFor="videoUrl">ลิงค์ วิดิโอ</Label>
        <input
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          type="text"
          id="videoUrl"
          placeholder="http://www.cookie.brownie.co.th/lesson-1"
          className="rounded-lg bg-stone-100 p-2 mt-1 mb-3"
        />
      </div>
      <Button type="submit" variant={"outline"}>
        Submit
      </Button>
    </form>
  );
};

export default AddLessonForm;
