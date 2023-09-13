"use client";

import { useEffect, useState } from "react";
import AccessRequest from "./AccessRequest";
import axios from "axios";
import url from "../../url";

const AccessRequestList = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    axios
      .get(`${url}/api/admin/pendingUsers`)
      .then((res) => setRequests(res.data.users));
  }, []);

  return (
    <div>
      {requests?.map((req) => (
        <AccessRequest
          key={req._id}
          username={req.username}
          userId={req._id}
          setRequests={setRequests}
        />
      ))}
    </div>
  );
};

export default AccessRequestList;
