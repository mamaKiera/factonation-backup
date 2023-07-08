import {
  CheckCheckIcon,
  CircleDot,
  ClipboardList,
  ClipboardListIcon,
  Code2Icon,
  LucideIcon,
  YoutubeIcon,
} from "lucide-react";

export const lessonLists = [
  "Introduction",
  "Environment Setup",
  "C# & .NET",
  "Architecture of .NET Applications",
  "Variables & Constants",
  "Types",
  "Type Conversion",
  "Final Project (Solution)",
];

export const whatYourWillLearn = [
  "ระยะเวลารวมประมาณ 4 เดือน โดยรูปแบบการเรียนจะเป็น VDO On-Demand สัปดาห์ละ 2 วิดีโอ",
  "กลุ่ม Private ผ่าน Discord สำหรับการพูดคุยและถามตอบระหว่างอาจารย์และนักเรียนที่เรียนในคอร์สเดียวกัน",
];

export const Prerequisites = ["C#", ".NET framework"];

export const ThisCourseIncludes = [
  { icon: YoutubeIcon, desc: "Videos (999hr total)" },
  { icon: CheckCheckIcon, desc: "multiple choice questions" },
  { icon: ClipboardListIcon, desc: "tasks" },
  { icon: Code2Icon, desc: "code challenges" },
];

export const courseDetails = ["updated Jun 23, 2023", "10 lessons"];

export const module_1 = {
  moduleName: "C# Fundamentals",
  data: [
    {
      title: "1) Introduction ",
      week: 1,
      desc: "เตรียมความพร้อมสำหรับการเรียนรู้ Module 1",
    },
    {
      title: "2) Environment Setup ",
      week: 1,
      desc: "เตรียมสภาพแวดล้อมเพื่อทำงานกับ C# ด้วย Visual Studio เวอร์ชั่นล่าสุด",
    },
    {
      title: "3) C# & .NET ",
      week: 2,
      desc: "ทำความเข้าใจข้อแตกต่างของ C# และ .NET",
    },
    {
      title: "4) Architecture of .NET Applications ",
      week: 2,
      desc: "สถาปัตยกรรมของ .NET",
    },
    {
      title: "5) Variables & Constants ",
      week: 3,
      desc: "ตัวแปรและค่าคงที่",
    },
    {
      title: "6) Types ",
      week: 3,
      desc: "ชนิดข้อมูล Primitive และ Non-primitives",
    },
    { title: "7) Type Conversion ", week: 4, desc: "การแปลงชนิดข้อมูล" },
    { title: "8) Operators ", week: 4, desc: "ตัวดำเนินการพื้นฐาน" },
    {
      title: "9) Class ",
      week: 5,
      desc: "Class คือหน่วยที่สำคัญที่สุดใน C#",
    },
    {
      title: "10) Strings ",
      week: 5,
      desc: "การจัดการตัวอักษรและข้อความ",
    },
    {
      title: "11) Collections ",
      week: 6,
      desc: "ทำความเข้าใจ Array และ List",
    },
    {
      title: "12) Value Types & Reference Types ",
      week: 6,
      desc: "การจัดการหน่วยความจำที่ไม่เหมือนกัน",
    },
    {
      title: "13) Conditional Statements ",
      week: 7,
      desc: "สร้างเงื่อนไขด้วย if, else, switch",
    },
    {
      title: "14) Iteration Statements ",
      week: 7,
      desc: "การทำงานซ้ำด้วย Loop",
    },
    { title: "15) Date & Time ", week: 8, desc: "การจัดการวันและเวลา" },
    { title: "16) IO ", week: 8, desc: "ทำการกับไฟล์บนระบบ" },
    {
      title: "17) Midterm (Question) ",
      week: 9,
      desc: "บททดสอบกลางภาค",
    },
    {
      title: "18) Midterm (Solution) ",
      week: 10,
      desc: "เฉลยบททดสอบกลางภาค",
    },
    {
      title: "19) Access Modifiers ",
      week: 11,
      desc: "การจัดความเข้าถึงของโค้ด",
    },
    {
      title: "20) Properties ",
      week: 11,
      desc: "การใช้งาน Field ที่ฉลาดกว่า",
    },
    {
      title: "21) Inheritance ",
      week: 12,
      desc: "การสืบทอดเพื่อลดโค้ด",
    },
    { title: "22) Polymorphism ", week: 12, desc: "การมีได้หลายรูปแบบ" },
    { title: "23) Interface ", week: 12, desc: "สัญญาโค้ด" },
    {
      title: "24) Generic ",
      week: 13,
      desc: "เขียนโค้ดให้น้อยลงด้วย Generics",
    },
    {
      title: "25) Delegate ",
      week: 13,
      desc: "การใช้งาน Function pointer",
    },
    { title: "26) Lambda ", week: 14, desc: "Function ที่ไม่มีชื่อ" },
    {
      title: "27) Event ",
      week: 14,
      desc: "เหตุการณ์และการทำงานร่วมกันกับ Delegate",
    },
    { title: "28) LINQ ", week: 15, desc: "เขียน Queries ในภาษา C#" },
    {
      title: "29) Nullable Types ",
      week: 15,
      desc: "ชนิดข้อมูลที่สามารถเป็น null ได้",
    },
    {
      title: "30) Exception Handling ",
      week: 16,
      desc: "การดักจับ Run-time error",
    },
    {
      title: "31) Asynchronous Programming ",
      week: 16,
      desc: "การเขียนโปรแกรมแบบไม่ต้องรอ",
    },
    {
      title: "32) Final Project (Question) ",
      week: 17,
      desc: "บททดสอบปลายภาค",
    },
    {
      title: "33) Final Project (Solution) ",
      week: 18,
      desc: "เฉลยบททดสอบปลายภาค",
    },
  ],
};
