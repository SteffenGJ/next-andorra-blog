"use client";
import { useState } from "react";
import Comment from "./Comment";
import ImageSlides from "./ImageSlides";
import {
  ExpandLess,
  ExpandMore,
  ThumbUp,
  ThumbUpOutlined,
} from "@mui/icons-material";
import CommentInput from "./CommentInput";
import CommentList from "./CommentList";
import placeLike from "@/functions/placeLike";
import makeNotification from "@/functions/makeNotification";
import { format } from "date-fns";

const BlogPost = ({ data }) => {
  const hasEverBeenLiked = data.likedBy.includes(localStorage.getItem("id"));
  const [hasLiked, setHasLiked] = useState(hasEverBeenLiked);
  const [isCommenting, setIsCommenting] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [changeComment, setChangeComment] = useState(false);

  const handleLike = async () => {
    setHasLiked((prev) => !prev);
    const now = new Date();
    const date = format(now, "dd.MM.yyyy");
    !hasEverBeenLiked &&
      (await placeLike(localStorage.getItem("id"), data._id));
    !hasEverBeenLiked &&
      makeNotification(
        localStorage.getItem("id"),
        `har liket opslaget '${data.title}'.`,
        date
      );
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 w-full">
      <h1 className="text-3xl font-semibold mb-2">{data.title}</h1>
      <p className="text-gray-600 mb-2">{data.date}</p>
      <div className="mb-4">
        <ImageSlides imageURLs={data.imageURLs} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{data.text}</p>
      <hr className="my-4 border-t-2 border-gray-300" />
      <div className="flex items-center justify-between">
        <div className="w-full">
          <div className="flex items-center space-x-2">
            {hasLiked ? (
              <button
                onClick={handleLike}
                className="w-full px-4 py-2 rounded-lg"
              >
                <ThumbUp sx={{ color: "blue" }} />
              </button>
            ) : (
              <button
                className="w-full px-4 py-2 rounded-lg"
                onClick={handleLike}
              >
                <ThumbUpOutlined />
              </button>
            )}
            <button
              onClick={() => setIsCommenting((prev) => !prev)}
              className="w-full px-4 py-2 rounded-lg bg-gray-100 border"
            >
              Kommentér
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center py-4">
        {showComments ? (
          <span
            onClick={() => setShowComments((prev) => !prev)}
            className="text-gray-400 text-sm"
          >
            <ExpandLess /> Skjul kommentarer
          </span>
        ) : (
          <span
            onClick={() => setShowComments((prev) => !prev)}
            className="text-gray-400 text-sm"
          >
            <ExpandMore /> Vis kommentarer
          </span>
        )}
      </div>
      {isCommenting && (
        <CommentInput
          setIsCommenting={setIsCommenting}
          setShowComments={setShowComments}
          setChangeComment={setChangeComment}
          postId={data._id}
          postTitle={data.title}
        />
      )}
      {showComments && (
        <CommentList postId={data._id} changeComment={changeComment} />
      )}
    </div>
  );
};

export default BlogPost;
