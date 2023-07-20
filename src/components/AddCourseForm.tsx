import axios from "axios";
import { useState } from "react";

export default function AddCourseForm() {
  const [file, setFile] = useState();
  const [caption, setCaption] = useState("");

  const submit = async (event) => {
    event.preventDefault();
    console.log(file, caption);

    try {
      const formData = new FormData();
      formData.append("image", file);
      formData.append("caption", caption);
      console.log(formData);

      await axios.post("http://localhost:8000/course", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // ... any additional logic you may have after the successful form submission ...
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form onSubmit={submit} encType="multipart/form-data">
      <input
        onChange={(e) => setFile(e.target.files[0])}
        type="file"
        accept="image/*"
      ></input>
      <input
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        type="text"
        placeholder="Caption"
      ></input>
      <button type="submit">Submit</button>
    </form>
  );
}
