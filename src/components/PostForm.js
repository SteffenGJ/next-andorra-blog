"use client";

import axios from "axios";
import { format } from "date-fns";
import { useState } from "react";
import url from "../../url";

const Postform = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [images, setImages] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const now = new Date();
    const date = format(now, "dd.MM.yyyy");

    const post = {
      title,
      date,
      text,
      imageURLs: images.split(","),
      comments: [],
      likedBy: [],
    };

    await axios.post(`${url}/api/admin/post`, { post });

    setTitle("");
    setImages("");
    setText("");
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-10"
        />
        <input
          placeholder="Billed-URL'er... (comma-seperated list)"
          value={images}
          onChange={(e) => setImages(e.target.value)}
          className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-10"
        />
        <textarea
          placeholder="Text..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-10"
        />
        <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Postform;
