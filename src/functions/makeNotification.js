import axios from "axios";
import url from "../../url";

const makeNotification = async (userId, text, date) => {
  await axios.post(`${url}/api/admin/notification`, {
    notification: { text, date },
    userId,
  });
};

export default makeNotification;
