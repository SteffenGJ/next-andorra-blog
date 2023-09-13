"use client";

import { useEffect, useState } from "react";
import Notification from "./Notification";
import axios from "axios";
import url from "../../url";

const NotificationList = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    axios
      .get(`${url}/api/admin/notifications`)
      .then((res) => setNotifications(res.data.notifications.reverse()));
  }, []);

  return (
    <div>
      {notifications?.map((noti) => (
        <Notification
          key={noti._id}
          notification={noti.text}
          date={noti.date}
        />
      ))}
    </div>
  );
};

export default NotificationList;
