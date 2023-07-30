import { host } from "@/types";

export async function getInstructors() {
  const res = await fetch(`http://${host}/user/ins/instructor`);
  const instructorData = await res.json();
  return instructorData.data;
}
