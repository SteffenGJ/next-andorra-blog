import axios from "axios";
import url from "../../url";

const placeLike = async (userId, postId) => {
  await axios.post(`${url}/api/content/${localStorage.getItem("id")}/like`, {
    userId,
    postId,
  });
};

export default placeLike;
