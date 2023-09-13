import axios from "axios";
import url from "../../url";

const placeComment = async (comment, userId, postId) => {
  const response = await axios.post(`${url}/api/content/${userId}/comment`, {
    comment,
    userId,
    postId,
  });
  return response.data;
};

export default placeComment;
