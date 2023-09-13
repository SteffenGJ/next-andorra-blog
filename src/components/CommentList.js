"use client";
import { useEffect, useState } from "react";
import Comment from "./Comment";
import axios from "axios";
import url from "../../url";

const CommentList = ({ postId, changeComment }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get(`${url}/api/content/${localStorage.getItem("id")}/comment/${postId}`)
      .then((res) => {
        setComments(res.data.comments);
      });
  }, [changeComment]);

  return (
    <div>
      {comments?.map((com) => (
        <Comment key={com._id} data={com} />
      ))}
    </div>
  );
};

export default CommentList;
