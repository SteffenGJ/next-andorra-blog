"use client";

import makeNotification from "@/functions/makeNotification";
import placeComment from "@/functions/placeComment";
import { AddComment } from "@mui/icons-material";
import { format, parseISO } from "date-fns";
import { useState } from "react";

const CommentInput = ({
  setIsCommenting,
  setShowComments,
  setChangeComment,
  postId,
  postTitle,
}) => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    setIsCommenting(false);
    const now = new Date();
    console.log(now, "NOW");
    const date = format(now, "dd.MM.yyyy");
    console.log(date);
    const comment = {
      text: value,
      date: date,
    };
    placeComment(comment, localStorage.getItem("id"), postId).then((res) =>
      setChangeComment((prev) => !prev)
    );
    makeNotification(
      localStorage.getItem("id"),
      `har kommenteret dit opslag '${postTitle}'.`,
      date
    );
    setShowComments(true);
  };

  return (
    <div className="flex items-center gap-2">
      <textarea
        style={{ resize: "none" }}
        className="bg-gray-100 w-full rounded p-2"
        placeholder="Skriv din kommentar..."
        onChange={(e) => setValue(e.target.value)}
        value={value}
      ></textarea>
      <button
        onClick={handleClick}
        className="flex justify-center items-center px-4 py-3 h-fit rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
      >
        <AddComment />
      </button>
    </div>
  );
};

export default CommentInput;
