import axios from "axios";
import { FormEvent, useState } from "react";

export default function AddCourseForm() {
  const [file, setFile] = useState();
  const [imageId, setImageId] = useState("");
  const [price, setPrice] = useState("");
  const [saledPrice, setSaledPrice] = useState("");
  const [details, setDetails] = useState("");
  const [courseName, setCourseName] = useState("");
  const [instructor, setInstructor] = useState("");

  const submit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("image", file);
      formData.append("imageId", imageId);
      formData.append("price", price);
      formData.append("saledPrice", saledPrice);
      formData.append("details", details);
      formData.append("courseName", courseName);
      formData.append("instructor", instructor);
      console.log(formData);

      await axios.post("http://localhost:8000/course", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // await fetch("http://localhost:8000/course", {
      //   method: "POST",
      //   body: JSON.stringify({ formData, caption }),
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      // });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form onSubmit={submit} className="flex flex-col">
      <input
        onChange={(e) => setFile(e.target.files[0])}
        type="file"
        accept="image/*"
        className="rounded-lg bg-stone-100 p-2 my-2"
      />
      <input
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        type="text"
        placeholder="9999"
        className="rounded-lg bg-stone-100 p-2 my-2"
      />
      <input
        value={saledPrice}
        onChange={(e) => setSaledPrice(Number(e.target.value))}
        type="text"
        placeholder="20"
        className="rounded-lg bg-stone-100 p-2 my-2"
      />
      <input
        value={details}
        onChange={(e) => setDetails(e.target.value)}
        type="text"
        placeholder="details"
        className="rounded-lg bg-stone-100 p-2 my-2"
      />
      <input
        value={courseName}
        onChange={(e) => setCourseName(e.target.value)}
        type="text"
        placeholder="courseName"
        className="rounded-lg bg-stone-100 p-2 my-2"
      />
      <input
        value={instructor}
        onChange={(e) => setInstructor(e.target.value)}
        type="text"
        placeholder="instructor"
        className="rounded-lg bg-stone-100 p-2 my-2"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
