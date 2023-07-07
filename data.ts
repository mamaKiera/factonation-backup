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
      week: "Week 1",
      desc: "เตรียมความพร้อมสำหรับการเรียนรู้ Module 1",
    },
    {
      title: "2) Environment Setup ",
      week: "Week 1",
      desc: "เตรียมสภาพแวดล้อมเพื่อทำงานกับ C# ด้วย Visual Studio เวอร์ชั่นล่าสุด",
    },
    {
      title: "3) C# & .NET ",
      week: "Week 2",
      desc: "ทำความเข้าใจข้อแตกต่างของ C# และ .NET",
    },
    {
      title: "4) Architecture of .NET Applications ",
      week: "Week 2",
      desc: "สถาปัตยกรรมของ .NET",
    },
    {
      title: "5) Variables & Constants ",
      week: "Week 3",
      desc: "ตัวแปรและค่าคงที่",
    },
    {
      title: "6) Types ",
      week: "Week 3",
      desc: "ชนิดข้อมูล Primitive และ Non-primitives",
    },
    { title: "7) Type Conversion ", week: "Week 4", desc: "การแปลงชนิดข้อมูล" },
    { title: "8) Operators ", week: "Week 4", desc: "ตัวดำเนินการพื้นฐาน" },
    {
      title: "9) Class ",
      week: "Week 5",
      desc: "Class คือหน่วยที่สำคัญที่สุดใน C#",
    },
    {
      title: "10) Strings ",
      week: "Week 5",
      desc: "การจัดการตัวอักษรและข้อความ",
    },
    {
      title: "11) Collections ",
      week: "Week 6",
      desc: "ทำความเข้าใจ Array และ List",
    },
    {
      title: "12) Value Types & Reference Types ",
      week: "Week 6",
      desc: "การจัดการหน่วยความจำที่ไม่เหมือนกัน",
    },
    {
      title: "13) Conditional Statements ",
      week: "Week 7",
      desc: "สร้างเงื่อนไขด้วย if, else, switch",
    },
    {
      title: "14) Iteration Statements ",
      week: "Week 7",
      desc: "การทำงานซ้ำด้วย Loop",
    },
    { title: "15) Date & Time ", week: "Week 8", desc: "การจัดการวันและเวลา" },
    { title: "16) IO ", week: "Week 8", desc: "ทำการกับไฟล์บนระบบ" },
    {
      title: "17) Midterm (Question) ",
      week: "Week 9",
      desc: "บททดสอบกลางภาค",
    },
    {
      title: "18) Midterm (Solution) ",
      week: "Week 10",
      desc: "เฉลยบททดสอบกลางภาค",
    },
    {
      title: "19) Access Modifiers ",
      week: "Week 11",
      desc: "การจัดความเข้าถึงของโค้ด",
    },
    {
      title: "20) Properties ",
      week: "Week 11",
      desc: "การใช้งาน Field ที่ฉลาดกว่า",
    },
    {
      title: "21) Inheritance ",
      week: "Week 12",
      desc: "การสืบทอดเพื่อลดโค้ด",
    },
    { title: "22) Polymorphism ", week: "Week 12", desc: "การมีได้หลายรูปแบบ" },
    { title: "23) Interface ", week: "Week 12", desc: "สัญญาโค้ด" },
    {
      title: "24) Generic ",
      week: "Week 13",
      desc: "เขียนโค้ดให้น้อยลงด้วย Generics",
    },
    {
      title: "25) Delegate ",
      week: "Week 13",
      desc: "การใช้งาน Function pointer",
    },
    { title: "26) Lambda ", week: "Week 14", desc: "Function ที่ไม่มีชื่อ" },
    {
      title: "27) Event ",
      week: "Week 14",
      desc: "เหตุการณ์และการทำงานร่วมกันกับ Delegate",
    },
    { title: "28) LINQ ", week: "Week 15", desc: "เขียน Queries ในภาษา C#" },
    {
      title: "29) Nullable Types ",
      week: "Week 15",
      desc: "ชนิดข้อมูลที่สามารถเป็น null ได้",
    },
    {
      title: "30) Exception Handling ",
      week: "Week 16",
      desc: "การดักจับ Run-time error",
    },
    {
      title: "31) Asynchronous Programming ",
      week: "Week 16",
      desc: "การเขียนโปรแกรมแบบไม่ต้องรอ",
    },
    {
      title: "32) Final Project (Question) ",
      week: "Week 17",
      desc: "บททดสอบปลายภาค",
    },
    {
      title: "33) Final Project (Solution) ",
      week: "Week 18",
      desc: "เฉลยบททดสอบปลายภาค",
    },
  ],
};

export const module_2 = {
  moduleName: "Desktop & Web Programming",
  data: [
    {
      title: "1) Introduction ",
      week: "Week 1",
      desc: "เตรียมความพร้อมสำหรับการเรียนรู้ Module 2",
    },
    {
      title: "2) Our First WPF App ",
      week: "Week 1",
      desc: "ลองเขียน WPF ครั้งแรก",
    },
    { title: "3) Basic XAML ", week: "Week 2", desc: "พื้นฐานภาษา XAML" },
    {
      title: "4) Basic Controls  ",
      week: "Week 2",
      desc: "การใช้ XAML Controls ต่างๆ",
    },
    {
      title: "5) Collection Controls ",
      week: "Week 3",
      desc: "การใช้ Controls กับกลุ่มข้อมูล",
    },
    { title: "6) Layouts ", week: "Week 3", desc: "การจัดวางโครงของ UI" },
    {
      title: "7) Data Binding I ",
      week: "Week 4",
      desc: "การผูกข้อมูลเบื้องต้น",
    },
    {
      title: "8) Data Binding II ",
      week: "Week 4",
      desc: "การผูกข้อมูลเพิ่มเติม",
    },
    {
      title: "9) Resources ",
      week: "Week 5",
      desc: "การสร้างทรัพยากรเพื่อใช้ซ้ำ",
    },
    {
      title: "10) Navigations ",
      week: "Week 6",
      desc: "การเคลื่อนย้ายไปมาในโปรแกรม",
    },
    {
      title: "11) Custom Controls ",
      week: "Week 7",
      desc: "การใช้ Controls จากผู้พัฒนาอื่น",
    },
    {
      title: "12) Database Introduction ",
      week: "Week 8",
      desc: "พื้นฐานเรื่องฐานข้อมูล",
    },
    {
      title: "13) Our First Database ",
      week: "Week 8",
      desc: "ลองสร้างฐานข้อมูลตัวแรกของเรา",
    },
    {
      title: "14) SQL Queries I ",
      week: "Week 9",
      desc: "การเขียน Queries พื้นฐาน",
    },
    {
      title: "15) SQL Queries II ",
      week: "Week 9",
      desc: "การเขียน Queries เพิ่มเติม",
    },
    {
      title: "16) Table Relationship ",
      week: "Week 10",
      desc: "ความสัมพันธ์ระหว่างตาราง",
    },
    {
      title: "17) Introduction to EF Core ",
      week: "Week 11",
      desc: "ทำความรู้จัก EF Core",
    },
    {
      title: "18) EF Core CRUD ",
      week: "Week 11",
      desc: "การทำ CRUD ใน EF Core",
    },
    {
      title: "19) EF Core Conventions ",
      week: "Week 12",
      desc: "Conventions ที่ควรรู้ของ EF Core",
    },
    {
      title: "20) Midterm: Question ",
      week: "Week 13",
      desc: "บททดสอบกลางภาค",
    },
    {
      title: "21) Midterm: Solution ",
      week: "Week 14",
      desc: "เฉลยบททดสอบกลางภาค",
    },
    {
      title: "22) Introduction to Blazor ",
      week: "Week 15",
      desc: "ทำความรู้จัก Blazor",
    },
    { title: "23) HTML I ", week: "Week 16", desc: "การเขียน HTML เบื้องต้น" },
    { title: "24) HTML II ", week: "Week 16", desc: "การเขียน HTML เพิ่มเติม" },
    { title: "25) CSS I ", week: "Week 15", desc: "การเขียน CSS เบื้องต้น" },
    { title: "26) CSS II ", week: "Week 15", desc: "การเขียน CSS เพิ่มเติม" },
    {
      title: "27) CSS Frameworks ",
      week: "Week 16",
      desc: "ลองใช้งาน CSS Frameworks ต่างๆ",
    },
    {
      title: "28) A Taste of Javascript ",
      week: "Week 17",
      desc: "ลองเขียนภาษา Javascript",
    },
    {
      title: "29) Blazor Server vs. Blazor WASM ",
      week: "Week 18",
      desc: "ข้อแตกต่างระหว่าง Blazor Server และ WASM",
    },
    {
      title: "30) Razor Pages & Components ",
      week: "Week 18",
      desc: "ทำความเข้าใจ Pages และ Components ใน Blazor",
    },
    {
      title: "31) Razor Data Binding ",
      week: "Week 19",
      desc: "Data Binding ในโลกของ Blazor",
    },
    {
      title: "32) Passing Values Between Components ",
      week: "Week 19",
      desc: "การส่งค่าไปมาระหว่าง Components",
    },
    {
      title: "33) Blazor Routing ",
      week: "Week 20",
      desc: "การทำงานกับ URL และ Routing",
    },
    {
      title: "34) Component Lifecycle ",
      week: "Week 21",
      desc: "Functions ของ Lifecycle ที่ต้องรู้",
    },
    {
      title: "35) Communication With Services ",
      week: "Week 22",
      desc: "ทำความเข้าใจ Dependency Injection และ Service Lifetime",
    },
    {
      title: "36) Blazor Server CRUD ",
      week: "Week 23",
      desc: "การทำ CRUD ใน Blazor Server",
    },
    { title: "37) Final: Question ", week: "Week 24", desc: "บททดสอบปลายภาค" },
    {
      title: "38) Final: Solution ",
      week: "Week 25",
      desc: "เฉลยบททดสอบปลายภาค",
    },
  ],
};

export const module_3 = {
  moduleName: "SCADA Development",
  data: [
    {
      title: "1) Introduction ",
      week: "Week 1",
      desc: "เตรียมความพร้อมสำหรับการเรียนรู้ Module 3",
    },
    {
      title: "2) Hardware Setup ",
      week: "Week 2",
      desc: "การ Setup และ Config ของ Hardware",
    },
    {
      title: "3) MODBUS Libraries ",
      week: "Week 3",
      desc: "ทำความรู้จัก MODBUS Libraries ที่ควรใช้",
    },
    {
      title: "4) Designing Data Layer ",
      week: "Week 3",
      desc: "การเขียน Project ที่ทำงานกับ Hardware ของเรา",
    },
    {
      title: "5) WPF as HMI I ",
      week: "Week 4",
      desc: "การเขียน WPF เป็น HMI",
    },
    {
      title: "6) WPF as HMI II ",
      week: "Week 4",
      desc: "การเขียน WPF เป็น HMI (ต่อ)",
    },
    {
      title: "7) Real-time Communication ",
      week: "Week 5",
      desc: "การใช้งาน SignalR เพื่อการสื่อสารระหว่าง Application",
    },
    {
      title: "8) SCADA Programming I ",
      week: "Week 6",
      desc: "การเขียน SCADA ด้วย Architecture ของเรา",
    },
    {
      title: "9) SCADA Programming II ",
      week: "Week 7",
      desc: "การเขียน SCADA ด้วย Architecture ของเรา (ต่อ)",
    },
    { title: "10) Midterm: Question ", week: "Week 8", desc: "บททดสอบกลางภาค" },
    {
      title: "11) Midterm: Solution ",
      week: "Week 9",
      desc: "เฉลยบททดสอบกลางภาค",
    },
    {
      title: "12) Authentication & Authorization ",
      week: "Week 10",
      desc: "ความปลอดภัยในระบบ SCADA",
    },
    {
      title: "13) PDF Reporting ",
      week: "Week 11",
      desc: "การทำรายงานผลการผลิตในรูปแบบ PDF",
    },
    {
      title: "14) Excel & CSV Reporting ",
      week: "Week 12",
      desc: "การทำรายงานผลการผลิตในรูปแบบ Excel",
    },
    { title: "15) Charts ", week: "Week 13", desc: "การทำกราฟในระบบ SCADA" },
    {
      title: "16) Deployment ",
      week: "Week 14",
      desc: "การเอาระบบที่เขียนขึ้น Production",
    },
    {
      title: "17) Final Project (Question) ",
      week: "Week 15",
      desc: "บททดสอบปลายภาค",
    },
    {
      title: "18) Final Project (Solution) ",
      week: "Week 16",
      desc: "เฉลยบททดสอบปลายภาค",
    },
  ],
};
